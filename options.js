// Options page logic — loads/saves user preferences from chrome.storage.local

const TEMPLATES = [
  { id: "summarize", title: "Summarize" },
  { id: "explain", title: "Explain" },
  { id: "translate", title: "Translate" },
  { id: "action-items", title: "Find Action Items" },
  { id: "code-review", title: "Code Review" }
];

document.addEventListener("DOMContentLoaded", async () => {
  const listEl = document.getElementById("template-list");
  const selectEl = document.getElementById("default-template");
  const saveBtn = document.getElementById("save-btn");
  const statusEl = document.getElementById("status");

  // Load current preferences
  const data = await chrome.storage.local.get("preferences");
  const prefs = data.preferences || {
    shortcut: "Ctrl+Shift+P",
    lastTemplate: "summarize",
    enabledTemplates: TEMPLATES.map(t => t.id)
  };

  // Build template toggle list
  for (const template of TEMPLATES) {
    const li = document.createElement("li");
    li.className = "template-item";

    const label = document.createElement("label");
    label.textContent = template.title;
    label.htmlFor = `toggle-${template.id}`;

    const toggle = document.createElement("input");
    toggle.type = "checkbox";
    toggle.className = "toggle";
    toggle.id = `toggle-${template.id}`;
    toggle.checked = prefs.enabledTemplates.includes(template.id);

    li.appendChild(label);
    li.appendChild(toggle);
    listEl.appendChild(li);

    // Populate default template select
    const option = document.createElement("option");
    option.value = template.id;
    option.textContent = template.title;
    if (template.id === prefs.lastTemplate) option.selected = true;
    selectEl.appendChild(option);
  }

  // Save handler
  saveBtn.addEventListener("click", async () => {
    const enabled = [];
    for (const template of TEMPLATES) {
      const checkbox = document.getElementById(`toggle-${template.id}`);
      if (checkbox.checked) enabled.push(template.id);
    }

    await chrome.storage.local.set({
      preferences: {
        shortcut: prefs.shortcut,
        lastTemplate: selectEl.value,
        enabledTemplates: enabled
      }
    });

    statusEl.classList.add("visible");
    setTimeout(() => statusEl.classList.remove("visible"), 2000);
  });
});
