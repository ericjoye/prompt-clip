// Prompt Clip — background service worker (Manifest V3)
// Handles context menu, keyboard shortcut, prompt generation, and clipboard copy.

const TEMPLATES = [
  {
    id: "summarize",
    title: "Summarize",
    instruction: "Please summarize the above in 3 bullet points."
  },
  {
    id: "explain",
    title: "Explain",
    instruction: "Please explain the above in simple terms, as if I'm new to this topic."
  },
  {
    id: "translate",
    title: "Translate",
    instruction: "Please translate the above into clear, natural English."
  },
  {
    id: "action-items",
    title: "Find Action Items",
    instruction: "Please extract any action items, tasks, or next steps from the above. List them as a numbered checklist."
  },
  {
    id: "code-review",
    title: "Code Review",
    instruction: "Please review the above code for bugs, readability, and best practices. Provide specific suggestions for improvement."
  }
];

const DEFAULT_SHORTCUT = "Ctrl+Shift+P";

// ─── Initialization ──────────────────────────────────────────────────────────

chrome.runtime.onInstalled.addListener(async () => {
  // Create the parent context menu item
  chrome.contextMenus.create({
    id: "prompt-clip-parent",
    title: "Send to AI",
    contexts: ["selection"]
  });

  // Create a child menu item for each template
  for (const template of TEMPLATES) {
    chrome.contextMenus.create({
      id: `prompt-clip-${template.id}`,
      parentId: "prompt-clip-parent",
      title: template.title,
      contexts: ["selection"]
    });
  }

  // Set default stored preferences if not present
  const existing = await chrome.storage.local.get("preferences");
  if (!existing.preferences) {
    await chrome.storage.local.set({
      preferences: {
        shortcut: DEFAULT_SHORTCUT,
        lastTemplate: "summarize",
        enabledTemplates: TEMPLATES.map(t => t.id)
      }
    });
  }
});

// ─── Context Menu Click Handler ──────────────────────────────────────────────

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (!info.selectionText || !tab) return;

  const menuItemId = info.menuItemId;
  if (!menuItemId.startsWith("prompt-clip-")) return;

  // Extract template ID (handle both parent and child clicks)
  let templateId;
  if (menuItemId === "prompt-clip-parent") {
    // Parent clicked — use last-used template
    const data = await chrome.storage.local.get("preferences");
    templateId = data.preferences?.lastTemplate || "summarize";
  } else {
    templateId = menuItemId.replace("prompt-clip-", "");
  }

  const template = TEMPLATES.find(t => t.id === templateId);
  if (!template) return;

  const prompt = buildPrompt(template, info.selectionText, tab);

  // Copy to clipboard via content script (service worker can't use navigator.clipboard directly)
  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (text) => navigator.clipboard.writeText(text),
      args: [prompt]
    });
    showCopyBadge(tab.id);
  } catch (err) {
    console.error("Prompt Clip: clipboard write failed", err);
  }

  // Update last-used template
  const data = await chrome.storage.local.get("preferences");
  const prefs = data.preferences || {};
  prefs.lastTemplate = templateId;
  await chrome.storage.local.set({ preferences: prefs });
});

// ─── Keyboard Shortcut Handler ───────────────────────────────────────────────

chrome.commands.onCommand.addListener(async (command) => {
  if (command !== "trigger-prompt-clip") return;

  // Get the active tab
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab || !tab.id) return;

  // Ask the content script for the current selection
  try {
    const results = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => window.getSelection()?.toString() || ""
    });

    const selection = results?.[0]?.result;
    if (!selection) return;

    const data = await chrome.storage.local.get("preferences");
    const templateId = data.preferences?.lastTemplate || "summarize";
    const template = TEMPLATES.find(t => t.id === templateId);
    if (!template) return;

    const prompt = buildPrompt(template, selection, tab);

    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (text) => navigator.clipboard.writeText(text),
      args: [prompt]
    });
    showCopyBadge(tab.id);
  } catch (err) {
    console.error("Prompt Clip: keyboard shortcut failed", err);
  }
});

// ─── Prompt Builder ──────────────────────────────────────────────────────────

function buildPrompt(template, selectionText, tab) {
  const title = tab.title || "Unknown Page";
  const url = tab.url || "";
  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  // Wrap selection in code fence if it looks like code
  const isCode = /[{}\[\]();]/.test(selectionText) && selectionText.length > 10;
  const formattedText = isCode
    ? "```\n" + selectionText.trim() + "\n```"
    : "> " + selectionText.trim().split("\n").join("\n> ");

  return `## ${template.title}\n\nSource: "${title}"\nURL: ${url}\nDate: ${date}\n\n${formattedText}\n\n${template.instruction}`;
}

// ─── Toolbar Badge Feedback ──────────────────────────────────────────────────

function showCopyBadge(tabId) {
  chrome.action.setBadgeText({ text: "✓", tabId });
  chrome.action.setBadgeBackgroundColor({ color: "#10b981", tabId });
  setTimeout(() => {
    chrome.action.setBadgeText({ text: "", tabId });
  }, 1500);
}
