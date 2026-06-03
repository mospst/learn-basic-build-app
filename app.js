const modules = [
  {
    id: "terminal",
    type: "Foundation",
    title: "Terminal And Shell",
    summary:
      "A terminal is the text window. A shell is the program inside it that reads commands and starts other programs. Learning this gives you direct control over files, apps, and developer tools.",
    map: [
      ["You", "Type a command"],
      ["Shell", "Parses the words"],
      ["Program", "Runs the request"],
      ["Output", "Shows the result"],
    ],
    keyIdeas: [
      ["Working directory", "The folder your command is currently operating inside."],
      ["Command", "A small instruction like pwd, ls, cd, or cat."],
      ["Argument", "Extra information passed to a command, such as a file name."],
      ["Output", "Text returned by a command after it runs."],
    ],
    professorNote:
      "The terminal feels scary because it has fewer visual clues than a normal app. The trick is to treat it like a precise conversation: where am I, what do I want to inspect, what command answers that safely?",
    missionTitle: "Build your first command chain",
    missionText:
      "In the simulator, run help, then pwd, then ls, then cat README.md. Notice how each command reduces uncertainty before you act.",
    quiz: {
      question: "What does pwd usually tell you?",
      options: ["The current folder path", "The list of files", "The current Git branch"],
      answer: 0,
      feedback:
        "Correct. pwd means print working directory, which is the folder your shell is currently using.",
    },
  },
  {
    id: "cli",
    type: "Foundation",
    title: "CLI Programs",
    summary:
      "CLI means command-line interface. It is a way to control an app with typed commands instead of buttons. Git, npm, Codex, and many AI coding tools all expose CLI workflows.",
    map: [
      ["Command", "git status"],
      ["CLI App", "Git receives it"],
      ["Local State", "Repo is inspected"],
      ["Result", "Changes are listed"],
    ],
    keyIdeas: [
      ["Flag", "An option that changes command behavior, often starting with --."],
      ["Subcommand", "A second word that selects an action, such as git status."],
      ["Exit code", "A hidden number that says whether a command succeeded."],
      ["Script", "A saved command, often defined in package.json."],
    ],
    professorNote:
      "A CLI is not a different kind of magic. It is just an app with a text-based control surface. Once you learn the pattern command plus options plus target, new tools become much easier to read.",
    missionTitle: "Read a command like a sentence",
    missionText:
      "Try git status and npm run dev in the simulator. Ask: which app is being called, what action is requested, and what result should I expect?",
    quiz: {
      question: "In npm run dev, which word names the script?",
      options: ["dev", "npm", "run"],
      answer: 0,
      feedback:
        "Exactly. npm is the app, run is the action, and dev is the script name.",
    },
  },
  {
    id: "files",
    type: "Foundation",
    title: "Files Developers Should Know",
    summary:
      "Modern projects are mostly structured text files. Knowing common file types helps you understand what an AI agent is reading and what kind of change it is making.",
    map: [
      [".md", "Human-readable notes"],
      [".json", "Structured settings"],
      [".js/.ts", "App behavior"],
      [".env", "Secrets, never commit"],
    ],
    keyIdeas: [
      ["Markdown", ".md files are plain text documents with light formatting."],
      ["JSON", ".json files store structured data as keys and values."],
      ["Source files", ".html, .css, .js, .ts, and .py usually contain the app itself."],
      ["Environment file", ".env stores local secrets. It should stay out of Git."],
    ],
    professorNote:
      "A beginner superpower is opening config files and reading them slowly. You do not need to understand every symbol at first. Start by identifying names, values, paths, and scripts.",
    missionTitle: "Inspect the project anatomy",
    missionText:
      "Run tree, then cat package.json, then explain .env. You are practicing file recognition, not memorizing every format detail.",
    quiz: {
      question: "Which file type is commonly used for private API keys?",
      options: [".env", ".html", ".css"],
      answer: 0,
      feedback:
        "Right. A .env file commonly stores secrets locally, and it should not be committed to Git.",
    },
  },
  {
    id: "vscode",
    type: "Workflow",
    title: "VS Code Basics",
    summary:
      "VS Code is a code editor. It combines a file explorer, text editor, search, terminal, source control, debugger, and extensions in one workspace.",
    map: [
      ["Explorer", "Open files"],
      ["Search", "Find text"],
      ["Terminal", "Run commands"],
      ["Source Control", "Review changes"],
    ],
    keyIdeas: [
      ["Workspace", "The folder VS Code opens and treats as the current project."],
      ["Integrated terminal", "A terminal panel inside VS Code, usually already in your project folder."],
      ["Source control", "The VS Code panel that helps inspect Git changes."],
      ["Extension", "An add-on that gives VS Code extra abilities."],
    ],
    professorNote:
      "VS Code is valuable because it keeps context together. You can inspect a file, run a command, search the project, and review a diff without losing the shape of the problem.",
    missionTitle: "Connect editor and terminal",
    missionText:
      "Run code . in the simulator. It will not open VS Code here, but it shows the common command for opening the current folder in the editor.",
    quiz: {
      question: "What is the integrated terminal?",
      options: ["A terminal inside VS Code", "A Git hosting site", "A file type"],
      answer: 0,
      feedback:
        "Yes. It is the terminal panel built into VS Code, usually pointed at your workspace.",
    },
  },
  {
    id: "ai-tools",
    type: "AI Systems",
    title: "How AI Uses Tools",
    summary:
      "A model predicts and reasons over text. A tool lets it act outside pure text, such as reading files, searching docs, running tests, opening a browser, or querying a database.",
    map: [
      ["User Goal", "What you want"],
      ["Model", "Plans next step"],
      ["Tool Call", "Fetches or changes data"],
      ["Verification", "Checks the result"],
    ],
    keyIdeas: [
      ["Tool call", "A structured request from the AI to use a capability."],
      ["Source of truth", "The place where the real answer lives, such as a database or file."],
      ["Guardrail", "A rule or check that limits unsafe or unwanted behavior."],
      ["Evaluation", "A repeatable test that measures whether prompts or agents work well."],
    ],
    professorNote:
      "The best AI users do not ask the model to guess when a tool can inspect reality. For debugging, the order is source of truth first, then server response, then UI rendering.",
    missionTitle: "Practice tool thinking",
    missionText:
      "In Prompt Gym, ask for a debugging plan. Include the source of truth, expected output, allowed tools, and verification step.",
    quiz: {
      question: "When a displayed value is wrong, what should you check first?",
      options: ["The source-of-truth data", "The button color", "The font size"],
      answer: 0,
      feedback:
        "Correct. Check the database or API source before assuming the UI is the bug.",
    },
  },
  {
    id: "mcp",
    type: "AI Systems",
    title: "MCP: Model Context Protocol",
    summary:
      "MCP is an open standard for connecting AI applications to external systems. It lets clients like Codex or Claude connect to tools, data sources, and reusable workflows.",
    map: [
      ["AI Client", "Codex or Claude"],
      ["MCP Server", "Standard connector"],
      ["Tool/Data", "GitHub, docs, DB"],
      ["Result", "Returned to AI"],
    ],
    keyIdeas: [
      ["Client", "The AI app that wants access to external context or actions."],
      ["Server", "The MCP service that exposes tools, resources, or prompts."],
      ["Transport", "How client and server communicate, such as local stdio or HTTP."],
      ["Permission", "The boundary that controls what tools may do."],
    ],
    professorNote:
      "Think of MCP as a common adapter. Instead of every AI app inventing a different GitHub or database connector, MCP gives them a shared protocol.",
    missionTitle: "Choose when MCP helps",
    missionText:
      "Use Prompt Gym to ask: Should this task use MCP, a normal CLI command, web search, or direct file reading? Good AI work starts with picking the right source.",
    quiz: {
      question: "What problem does MCP mainly solve?",
      options: [
        "Connecting AI apps to tools and data with a common protocol",
        "Making CSS animations faster",
        "Replacing every programming language",
      ],
      answer: 0,
      feedback:
        "Exactly. MCP standardizes how AI clients connect to external tools, data, and workflows.",
    },
  },
  {
    id: "skills-plugins",
    type: "AI Systems",
    title: "Skills And Plugins",
    summary:
      "In Codex, a skill is a reusable workflow instruction package. A plugin is an installable bundle that can include skills, app integrations, MCP servers, and assets.",
    map: [
      ["Skill", "Reusable workflow"],
      ["Plugin", "Installable bundle"],
      ["App", "Connected service"],
      ["MCP", "Tool/data bridge"],
    ],
    keyIdeas: [
      ["Skill", "Task-specific instructions plus optional scripts or references."],
      ["Progressive disclosure", "Codex loads full skill instructions only when needed."],
      ["Plugin", "A distribution package for reusable Codex capabilities."],
      ["AGENTS.md", "A project instruction file Codex reads before working."],
    ],
    professorNote:
      "Use the smallest durable surface that fits. A one-time request belongs in the prompt. Repo habits belong in AGENTS.md. A reusable workflow becomes a skill. A shareable bundle becomes a plugin.",
    missionTitle: "Pick the right instruction layer",
    missionText:
      "Try explain AGENTS.md and explain skill. Then write a prompt asking AI to decide whether a rule should be prompt-only, AGENTS.md, skill, plugin, MCP, or automation.",
    quiz: {
      question: "Which one is the installable bundle?",
      options: ["Plugin", "Prompt typo", "Working directory"],
      answer: 0,
      feedback:
        "Right. A plugin can bundle skills, apps, and MCP servers for installation.",
    },
  },
  {
    id: "advanced",
    type: "Practice",
    title: "Advanced AI Technique",
    summary:
      "Advanced AI use is less about magic prompts and more about context, constraints, tools, verification, and iteration. You give the model enough structure to act like a careful collaborator.",
    map: [
      ["Goal", "State outcome"],
      ["Context", "Give facts"],
      ["Tools", "Name sources"],
      ["Checks", "Verify result"],
    ],
    keyIdeas: [
      ["Specificity", "Say what output you want, for whom, and under what constraints."],
      ["Examples", "Show 1 to 5 examples when format or tone matters."],
      ["Evals", "Use test cases to compare prompt versions instead of relying on vibe."],
      ["Model fit", "Use stronger reasoning for complex planning and cheaper models for simple tasks."],
    ],
    professorNote:
      "A strong AI request contains a job, context, constraints, a success definition, and verification. If a person with no background could follow it, a model usually does better too.",
    missionTitle: "Write a professor-grade AI request",
    missionText:
      "Use Prompt Gym to improve this request: 'make me an app'. Add audience, features, constraints, style, file edits allowed, and verification.",
    quiz: {
      question: "What is an eval?",
      options: [
        "A repeatable test for model or prompt behavior",
        "A CSS color",
        "A folder shortcut",
      ],
      answer: 0,
      feedback:
        "Correct. An eval is a repeatable way to measure whether a prompt or agent works.",
    },
  },
];

const glossary = {
  terminal: "The window where you type commands.",
  shell: "The program that reads your command text and starts programs.",
  cli: "Command-line interface, an app controlled by typed commands.",
  github: "A website that stores Git repositories online so you can back up and share code.",
  repo: "Repository. A project folder tracked with Git history.",
  commit: "A saved snapshot of your project at a point in time.",
  branch: "A named line of work in Git. main is the usual starting branch.",
  push: "Upload local commits from your computer to a remote repo such as GitHub.",
  pull: "Download remote commits from GitHub into your local project.",
  localhost: "A web address that points back to your own computer while developing.",
  api: "Application programming interface. A way for programs to talk to each other.",
  frontend: "The part of an app users see and interact with in the browser.",
  backend: "The server-side part that usually handles data, auth, and business rules.",
  dependency: "External code your project uses, usually installed through a package manager.",
  bug: "A mismatch between what the program does and what it should do.",
  readme: "A project guide file, usually named README.md.",
  mcp: "Model Context Protocol, a standard way for AI apps to connect to tools and data.",
  skill: "A reusable instruction package for a specific workflow.",
  plugin: "An installable bundle that can contain skills, app connections, and MCP servers.",
  "agents.md": "A file Codex reads for project-specific instructions before it works.",
  ".env": "A local file commonly used for secrets like API keys. Do not commit it.",
  eval: "A repeatable test that measures AI output quality or behavior.",
};

const commandHelp = [
  "help                 Show safe simulator commands",
  "pwd                  Print the current folder",
  "ls                   List files in the current folder",
  "cd <folder>          Move to a folder",
  "cat <file>           Read a simulated file",
  "tree                 Show the simulated project tree",
  "rg <word>            Search simulated files",
  "explain <term>       Explain a term, such as mcp or .env",
  "git status           Inspect simulated Git state",
  "git add .            Stage simulated changes",
  "git commit -m \"msg\"  Save a simulated Git snapshot",
  "git push             Upload simulated commits",
  "npm run dev          Simulate starting a local app",
  "npm test             Simulate project checks",
  "code .               Simulate opening the folder in VS Code",
  "clear                Clear the terminal",
];

const fakeFiles = {
  "/learn-ai-lab": {
    type: "dir",
    children: ["README.md", "AGENTS.md", "package.json", "src", "docs"],
  },
  "/learn-ai-lab/src": {
    type: "dir",
    children: ["index.html", "styles.css", "app.js"],
  },
  "/learn-ai-lab/docs": {
    type: "dir",
    children: ["mcp-notes.md", "prompt-checklist.md"],
  },
  "/learn-ai-lab/README.md": {
    type: "file",
    content:
      "# AI Tools Lab\n\nThis simulated project teaches terminal basics, file types, VS Code habits, MCP, skills, plugins, and advanced AI workflows.",
  },
  "/learn-ai-lab/AGENTS.md": {
    type: "file",
    content:
      "# Agent Instructions\n\n- Explain why changes matter.\n- Validate user input.\n- Never commit .env files or secrets.\n- Verify source data before fixing UI display bugs.",
  },
  "/learn-ai-lab/package.json": {
    type: "file",
    content:
      '{\n  "name": "ai-tools-lab",\n  "scripts": {\n    "dev": "serve static files",\n    "test": "run simulated checks"\n  }\n}',
  },
  "/learn-ai-lab/src/index.html": {
    type: "file",
    content:
      "<!-- HTML defines the page structure. CSS styles it. JavaScript makes it interactive. -->",
  },
  "/learn-ai-lab/src/styles.css": {
    type: "file",
    content:
      "/* CSS controls layout, spacing, colors, and responsive behavior. */",
  },
  "/learn-ai-lab/src/app.js": {
    type: "file",
    content:
      "// JavaScript handles app state, events, simulated terminal commands, and quizzes.",
  },
  "/learn-ai-lab/docs/mcp-notes.md": {
    type: "file",
    content:
      "MCP connects AI clients to tools and data sources through a common protocol.",
  },
  "/learn-ai-lab/docs/prompt-checklist.md": {
    type: "file",
    content:
      "Strong prompt checklist: goal, context, constraints, examples, tools, output format, verification.",
  },
};

const learningPaths = [
  {
    id: "lost",
    label: "I feel lost",
    title: "Orient before you change anything",
    steps: [
      "Find where you are with pwd.",
      "List files with ls or tree.",
      "Read README.md, package.json, and AGENTS.md.",
      "Ask AI to summarize the project in beginner language.",
    ],
    aiPrompt:
      "Explain this project to me like I am new. Start with the folder structure, then the run commands, then the safest first edit.",
  },
  {
    id: "build",
    label: "I want to build",
    title: "Build in one small slice",
    steps: [
      "Write the user outcome in one sentence.",
      "Ask which files likely need to change.",
      "Make the smallest visible version first.",
      "Run checks before adding polish.",
    ],
    aiPrompt:
      "Help me build this feature in the smallest safe version first. Tell me which files to inspect, what to change, and how to verify it.",
  },
  {
    id: "bug",
    label: "Something broke",
    title: "Debug from truth to screen",
    steps: [
      "Describe expected behavior and actual behavior.",
      "Check source data first when displayed data is wrong.",
      "Check server or API response second.",
      "Check client rendering last.",
    ],
    aiPrompt:
      "Debug this with the ladder: source data, server/API response, then client render. Ask for evidence before proposing a fix.",
  },
  {
    id: "ai",
    label: "I want AI help",
    title: "Give AI a clean job packet",
    steps: [
      "State the goal and audience.",
      "Add context, constraints, and allowed tools.",
      "Name the output format you want.",
      "Ask for verification and a short explanation.",
    ],
    aiPrompt:
      "Goal: ... Context: ... Constraints: ... Output: ... Verification: ... Explain the why as you work.",
  },
];

const fileTypes = [
  {
    label: "README.md",
    purpose: "The project guide. It should explain what the app does and how to run it.",
    habit: "Read it first when entering a new repo.",
    aiPrompt: "Summarize README.md and tell me the first three commands I should know.",
  },
  {
    label: "package.json",
    purpose: "A JavaScript project control file. It lists scripts, metadata, and dependencies.",
    habit: "Look at scripts before guessing how to start or test the app.",
    aiPrompt: "Explain the scripts in package.json and which one starts the local app.",
  },
  {
    label: "index.html",
    purpose: "The browser page structure: headings, buttons, forms, and script links.",
    habit: "Use semantic tags so people and assistive tools understand the page.",
    aiPrompt: "Review this HTML for structure, accessibility, and beginner-friendly naming.",
  },
  {
    label: "styles.css",
    purpose: "The visual rules: layout, spacing, colors, responsive behavior.",
    habit: "Check mobile width early, not only after the desktop view looks nice.",
    aiPrompt: "Check this CSS for mobile layout problems and text overflow.",
  },
  {
    label: "app.js",
    purpose: "The behavior layer: state, clicks, forms, rendering, and validation.",
    habit: "Keep functions focused and name variables by what they mean.",
    aiPrompt: "Explain this JavaScript file by data, state, render functions, and event listeners.",
  },
  {
    label: ".env",
    purpose: "Local secrets such as API keys. It should not be committed to Git.",
    habit: "Use environment variables for secrets and add .env to .gitignore.",
    aiPrompt: "Check whether this project protects secrets correctly. Do not print secret values.",
  },
  {
    label: ".gitignore",
    purpose: "A list of files Git should ignore, like .env or generated folders.",
    habit: "Create it before adding dependencies or private config.",
    aiPrompt: "Suggest a minimal .gitignore for this project and explain each line.",
  },
  {
    label: "AGENTS.md",
    purpose: "Instructions that tell Codex how to work inside the project.",
    habit: "Use it for durable project rules, not one-time requests.",
    aiPrompt: "Improve AGENTS.md for a beginner project without adding too many rules.",
  },
];

const commandRecipes = [
  {
    label: "pwd",
    meaning: "Print working directory.",
    use: "Use it when you are unsure which folder your terminal is inside.",
    next: "Then run ls to inspect what is in that folder.",
  },
  {
    label: "ls",
    meaning: "List files.",
    use: "Use it before opening or editing files so you know the project shape.",
    next: "Then read README.md or package.json.",
  },
  {
    label: "rg \"word\"",
    meaning: "Search project text quickly.",
    use: "Use it to find where a button label, function, route, or error message lives.",
    next: "Open the matching file and read nearby code before changing it.",
  },
  {
    label: "git status",
    meaning: "Show what changed in your repo.",
    use: "Use it before commits, before pulls, and anytime you feel unsure.",
    next: "Review changed files before staging them.",
  },
  {
    label: "git add .",
    meaning: "Stage all current changes for the next commit.",
    use: "Use it only when every changed file belongs in the commit.",
    next: "Run git status again to confirm what is staged.",
  },
  {
    label: "git commit -m",
    meaning: "Save a named snapshot.",
    use: "Use it when the change is complete and verified.",
    next: "Write the message as what changed, such as Add workflow diagram.",
  },
  {
    label: "git push",
    meaning: "Upload commits to GitHub.",
    use: "Use it after committing when your branch tracks a remote branch.",
    next: "Open GitHub to confirm the commit appears online.",
  },
  {
    label: "npm run dev",
    meaning: "Start the local development version of many JavaScript apps.",
    use: "Use it when package.json has a dev script.",
    next: "Open the localhost URL it prints.",
  },
  {
    label: "npm test",
    meaning: "Run the project checks if a test script exists.",
    use: "Use it after code changes to catch mistakes.",
    next: "If it fails, read the first useful error, not the whole wall at once.",
  },
];

const debugScenarios = [
  {
    text: "The app displays the wrong user name, and you do not know whether the UI or data is wrong.",
    correct: "source",
    result:
      "Start with source data. If the database or saved file already has the wrong name, fixing CSS or React will only hide the real problem.",
  },
  {
    text: "The database value is correct, but the API response still returns the old value.",
    correct: "server",
    result:
      "Check server/API next. The source is correct, so inspect the route, cache, query, or transformation that sends data to the client.",
  },
  {
    text: "The API response is correct, but the screen still shows the old value.",
    correct: "client",
    result:
      "Now check client/UI. The data arrived correctly, so look at rendering, state, stale cache, or the component using the wrong field.",
  },
];

const state = {
  activeIndex: 0,
  cwd: "/learn-ai-lab",
  activeDebugIndex: 0,
  done: new Set(JSON.parse(localStorage.getItem("aiToolsLabDone") || "[]")),
};

const moduleNav = document.querySelector("#moduleNav");
const moduleType = document.querySelector("#moduleType");
const moduleTitle = document.querySelector("#moduleTitle");
const moduleSummary = document.querySelector("#moduleSummary");
const visualMap = document.querySelector("#visualMap");
const keyIdeas = document.querySelector("#keyIdeas");
const professorNote = document.querySelector("#professorNote");
const missionTitle = document.querySelector("#missionTitle");
const missionText = document.querySelector("#missionText");
const quizQuestion = document.querySelector("#quizQuestion");
const quizOptions = document.querySelector("#quizOptions");
const quizFeedback = document.querySelector("#quizFeedback");
const progressLabel = document.querySelector("#progressLabel");
const progressFill = document.querySelector("#progressFill");
const markDone = document.querySelector("#markDone");
const resetProgress = document.querySelector("#resetProgress");
const terminalOutput = document.querySelector("#terminalOutput");
const terminalForm = document.querySelector("#terminalForm");
const terminalInput = document.querySelector("#terminalInput");
const promptInput = document.querySelector("#promptInput");
const analyzePrompt = document.querySelector("#analyzePrompt");
const loadPromptExample = document.querySelector("#loadPromptExample");
const promptScore = document.querySelector("#promptScore");
const pathChoices = document.querySelector("#pathChoices");
const pathResult = document.querySelector("#pathResult");
const fileTypeChoices = document.querySelector("#fileTypeChoices");
const fileTypeResult = document.querySelector("#fileTypeResult");
const commandRecipeChoices = document.querySelector("#commandRecipeChoices");
const commandRecipeResult = document.querySelector("#commandRecipeResult");
const debugScenario = document.querySelector("#debugScenario");
const debugActions = document.querySelector("#debugActions");
const debugResult = document.querySelector("#debugResult");

function saveProgress() {
  localStorage.setItem("aiToolsLabDone", JSON.stringify([...state.done]));
}

function renderNav() {
  moduleNav.innerHTML = "";

  modules.forEach((module, index) => {
    const button = document.createElement("button");
    button.className = "module-button";
    if (index === state.activeIndex) button.classList.add("active");
    if (state.done.has(module.id)) button.classList.add("done");
    button.type = "button";
    button.innerHTML = `
      <span class="module-number">${index + 1}</span>
      <span><strong>${module.title}</strong><span>${module.type}</span></span>
      <span class="done-dot" aria-hidden="true"></span>
    `;
    button.addEventListener("click", () => {
      state.activeIndex = index;
      render();
    });
    moduleNav.appendChild(button);
  });
}

function renderProgress() {
  const percent = Math.round((state.done.size / modules.length) * 100);
  progressLabel.textContent = `${percent}% complete`;
  progressFill.style.width = `${percent}%`;
}

function renderModule() {
  const module = modules[state.activeIndex];
  moduleType.textContent = module.type;
  moduleTitle.textContent = module.title;
  moduleSummary.textContent = module.summary;
  professorNote.textContent = module.professorNote;
  missionTitle.textContent = module.missionTitle;
  missionText.textContent = module.missionText;

  visualMap.innerHTML = "";
  module.map.forEach(([label, detail], index) => {
    const node = document.createElement("div");
    node.className = "map-node";
    node.innerHTML = `<small>Step ${index + 1}</small><strong>${label}</strong><span>${detail}</span>`;
    visualMap.appendChild(node);
  });

  keyIdeas.innerHTML = "";
  module.keyIdeas.forEach(([term, definition]) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${term}</strong>${definition}`;
    keyIdeas.appendChild(item);
  });

  quizQuestion.textContent = module.quiz.question;
  quizFeedback.textContent = "";
  quizOptions.innerHTML = "";
  module.quiz.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = option;
    button.addEventListener("click", () => answerQuiz(index));
    quizOptions.appendChild(button);
  });

  markDone.textContent = state.done.has(module.id) ? "Module completed" : "Mark module done";
}

function answerQuiz(index) {
  const module = modules[state.activeIndex];
  const buttons = [...quizOptions.querySelectorAll("button")];
  buttons.forEach((button, buttonIndex) => {
    button.classList.remove("correct", "incorrect");
    if (buttonIndex === module.quiz.answer) button.classList.add("correct");
  });

  if (index === module.quiz.answer) {
    quizFeedback.textContent = module.quiz.feedback;
    state.done.add(module.id);
    saveProgress();
    renderNav();
    renderProgress();
    markDone.textContent = "Module completed";
    return;
  }

  buttons[index].classList.add("incorrect");
  quizFeedback.textContent = "Close. Compare the options with the key ideas, then try the green answer.";
}

function render() {
  renderNav();
  renderProgress();
  renderModule();
}

function addTerminalLine(text, kind = "output") {
  const entry = document.createElement("pre");
  entry.className = `terminal-entry ${kind}`;
  entry.textContent = text;
  terminalOutput.appendChild(entry);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function normalizePath(path) {
  if (!path || path === ".") return state.cwd;
  if (path === "..") {
    if (state.cwd === "/learn-ai-lab") return state.cwd;
    return state.cwd.split("/").slice(0, -1).join("/") || "/learn-ai-lab";
  }
  if (path.startsWith("/")) return path;
  return `${state.cwd}/${path}`.replace(/\/+/g, "/");
}

function listDirectory(path) {
  const entry = fakeFiles[path];
  if (!entry) return `No such folder: ${path}`;
  if (entry.type !== "dir") return `${path} is a file, not a folder.`;
  return entry.children.join("  ");
}

function readFile(target) {
  const path = normalizePath(target);
  const entry = fakeFiles[path];
  if (!entry) return `No such file: ${target}`;
  if (entry.type !== "file") return `${target} is a folder. Try ls ${target}.`;
  return entry.content;
}

function searchFiles(term) {
  if (!term) return "Usage: rg <word>";
  const hits = [];
  Object.entries(fakeFiles).forEach(([path, entry]) => {
    if (entry.type !== "file") return;
    if (entry.content.toLowerCase().includes(term.toLowerCase())) {
      hits.push(`${path}: ${entry.content.split("\n")[0]}`);
    }
  });
  return hits.length ? hits.join("\n") : `No simulated file mentions "${term}".`;
}

function explainTerm(rawTerm) {
  const term = rawTerm.trim().toLowerCase();
  if (!term) return "Usage: explain <term>. Try explain mcp or explain .env.";
  return glossary[term] || `I do not know "${rawTerm}" yet. Try terminal, cli, mcp, skill, plugin, AGENTS.md, .env, or eval.`;
}

function projectTree() {
  return [
    "/learn-ai-lab",
    "|-- README.md",
    "|-- AGENTS.md",
    "|-- package.json",
    "|-- src",
    "|   |-- index.html",
    "|   |-- styles.css",
    "|   `-- app.js",
    "`-- docs",
    "    |-- mcp-notes.md",
    "    `-- prompt-checklist.md",
  ].join("\n");
}

function runSimulatedCommand(rawCommand) {
  const command = rawCommand.trim();
  if (!command) return "";
  const [base, ...parts] = command.split(/\s+/);
  const rest = parts.join(" ");

  if (base === "clear") {
    terminalOutput.innerHTML = "";
    return "";
  }

  if (command === "help") return commandHelp.join("\n");
  if (command === "pwd") return state.cwd;
  if (command === "ls") return listDirectory(state.cwd);
  if (base === "ls") return listDirectory(normalizePath(rest));
  if (command === "tree") return projectTree();
  if (base === "cat") return readFile(rest);
  if (base === "rg") return searchFiles(rest);
  if (base === "explain") return explainTerm(rest);

  if (base === "cd") {
    const next = normalizePath(rest || "/learn-ai-lab");
    const entry = fakeFiles[next];
    if (!entry) return `No such folder: ${rest}`;
    if (entry.type !== "dir") return `${rest} is a file, not a folder.`;
    state.cwd = next;
    return `Moved to ${state.cwd}`;
  }

  if (command === "git status") {
    return "On branch main\nYour branch is up to date with origin/main.\n\nnothing to commit, working tree clean";
  }

  if (command === "git add .") {
    return "Simulated: staged all current changes.\nReal habit: use git status first so you know what you are staging.";
  }

  if (base === "git" && parts[0] === "commit") {
    return "Simulated: saved a Git snapshot.\nReal habit: commit after the change is small, clear, and checked.";
  }

  if (command === "git push") {
    return "Simulated: uploaded commits to GitHub.\nReal habit: push after committing so your work is backed up online.";
  }

  if (command === "npm run dev") {
    return "Simulated dev server ready.\nIn a real project, this usually starts a local website on a localhost URL.";
  }

  if (command === "npm test") {
    return "Simulated checks passed.\nReal habit: run the project's checks after editing code.";
  }

  if (command === "code .") {
    return "Simulated: VS Code would open the current folder.";
  }

  if (command.includes("rm") || command.includes("sudo") || command.includes(">")) {
    return "Safety note: this simulator does not run destructive or shell-redirection commands.";
  }

  return `Unknown simulated command: ${command}\nTry help to see the safe command list.`;
}

function seedTerminal() {
  addTerminalLine("Welcome to the safe terminal simulator.", "hint");
  addTerminalLine("Try: help", "hint");
}

function analyzePromptText(text) {
  const normalized = text.toLowerCase();
  const checks = [
    {
      name: "Goal",
      pass: /\b(build|create|fix|explain|review|teach|debug|summarize|plan)\b/.test(normalized),
      detail: "State the job as an action, not only a topic.",
    },
    {
      name: "Context",
      pass: normalized.length > 140 || /\bcontext|background|audience|project|current\b/.test(normalized),
      detail: "Give enough background so the model is not guessing.",
    },
    {
      name: "Constraints",
      pass: /\b(no|do not|avoid|must|only|safe|local|vanilla|mobile|deadline|budget)\b/.test(normalized),
      detail: "Name limits, safety rules, or preferences.",
    },
    {
      name: "Output",
      pass: /\b(format|list|table|steps|code|files|summary|plan|checklist)\b/.test(normalized),
      detail: "Say what shape the answer should take.",
    },
    {
      name: "Verify",
      pass: /\b(test|verify|check|source|cite|run|confirm|validate)\b/.test(normalized),
      detail: "Ask for a check so the work does not stop at a guess.",
    },
  ];

  return checks;
}

function renderPromptScore() {
  const text = promptInput.value.trim();
  promptScore.innerHTML = "";

  if (!text) {
    promptScore.textContent = "Write or load a prompt first.";
    return;
  }

  const checks = analyzePromptText(text);
  const passed = checks.filter((check) => check.pass).length;
  const heading = document.createElement("p");
  heading.className = "quiz-feedback";
  heading.textContent = `Score: ${passed}/${checks.length}. Strong prompts usually include a goal, context, constraints, desired output, and verification.`;
  promptScore.appendChild(heading);

  checks.forEach((check) => {
    const row = document.createElement("div");
    row.className = "score-row";
    row.innerHTML = `
      <span class="score-name">${check.pass ? "Pass" : "Improve"}: ${check.name}</span>
      <span class="score-detail">${check.detail}</span>
    `;
    promptScore.appendChild(row);
  });
}

function setActiveChoice(container, activeButton) {
  [...container.querySelectorAll("button")].forEach((button) => {
    button.classList.toggle("active", button === activeButton);
  });
}

function renderLearningPath(path, activeButton) {
  setActiveChoice(pathChoices, activeButton);
  pathResult.innerHTML = `
    <strong>${path.title}</strong>
    <ol>${path.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
    <p><strong>Prompt to try</strong><br><code>${path.aiPrompt}</code></p>
  `;
}

function renderFileType(fileType, activeButton) {
  setActiveChoice(fileTypeChoices, activeButton);
  fileTypeResult.innerHTML = `
    <strong>${fileType.label}</strong>
    <ul>
      <li><strong>Purpose:</strong> ${fileType.purpose}</li>
      <li><strong>Safe habit:</strong> ${fileType.habit}</li>
      <li><strong>Ask AI:</strong> <code>${fileType.aiPrompt}</code></li>
    </ul>
  `;
}

function renderCommandRecipe(recipe, activeButton) {
  setActiveChoice(commandRecipeChoices, activeButton);
  commandRecipeResult.innerHTML = `
    <strong><code>${recipe.label}</code></strong>
    <ul>
      <li><strong>Meaning:</strong> ${recipe.meaning}</li>
      <li><strong>Use when:</strong> ${recipe.use}</li>
      <li><strong>Next step:</strong> ${recipe.next}</li>
    </ul>
  `;
}

function renderDebugScenario() {
  const scenario = debugScenarios[state.activeDebugIndex];
  debugScenario.textContent = scenario.text;
  debugResult.innerHTML =
    "<strong>Choose your first check.</strong> The debugging ladder is source data, server/API, then client/UI unless the evidence already rules out an earlier layer.";
  debugActions.innerHTML = "";

  [
    ["source", "Source data"],
    ["server", "Server/API"],
    ["client", "Client/UI"],
  ].forEach(([value, label]) => {
    const button = document.createElement("button");
    button.className = "debug-button";
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", () => {
      [...debugActions.querySelectorAll(".debug-button")].forEach((debugButton) => {
        debugButton.classList.remove("active", "correct", "incorrect");
      });
      button.classList.add("active", value === scenario.correct ? "correct" : "incorrect");
      debugResult.innerHTML =
        value === scenario.correct
          ? `<strong>Correct first check.</strong>${scenario.result}`
          : `<strong>Good guess, wrong first layer.</strong> This case gives evidence that points to ${scenario.correct}. ${scenario.result}`;
    });
    debugActions.appendChild(button);
  });

  const nextButton = document.createElement("button");
  nextButton.className = "debug-button";
  nextButton.type = "button";
  nextButton.textContent = "Next case";
  nextButton.addEventListener("click", () => {
    state.activeDebugIndex = (state.activeDebugIndex + 1) % debugScenarios.length;
    renderDebugScenario();
  });
  debugActions.appendChild(nextButton);
}

function renderFreshmanToolkit() {
  pathChoices.innerHTML = "";
  learningPaths.forEach((path, index) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.textContent = path.label;
    button.addEventListener("click", () => renderLearningPath(path, button));
    pathChoices.appendChild(button);
    if (index === 0) renderLearningPath(path, button);
  });

  fileTypeChoices.innerHTML = "";
  fileTypes.forEach((fileType, index) => {
    const button = document.createElement("button");
    button.className = "chip-button";
    button.type = "button";
    button.textContent = fileType.label;
    button.addEventListener("click", () => renderFileType(fileType, button));
    fileTypeChoices.appendChild(button);
    if (index === 0) renderFileType(fileType, button);
  });

  commandRecipeChoices.innerHTML = "";
  commandRecipes.forEach((recipe, index) => {
    const button = document.createElement("button");
    button.className = "chip-button";
    button.type = "button";
    button.textContent = recipe.label;
    button.addEventListener("click", () => renderCommandRecipe(recipe, button));
    commandRecipeChoices.appendChild(button);
    if (index === 0) renderCommandRecipe(recipe, button);
  });

  renderDebugScenario();
}

terminalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const command = terminalInput.value;
  terminalInput.value = "";
  if (!command.trim()) return;
  addTerminalLine(`$ ${command}`, "command");
  const result = runSimulatedCommand(command);
  if (result) addTerminalLine(result, result.startsWith("Unknown") ? "hint" : "output");
});

markDone.addEventListener("click", () => {
  const module = modules[state.activeIndex];
  state.done.add(module.id);
  saveProgress();
  renderNav();
  renderProgress();
  markDone.textContent = "Module completed";
});

resetProgress.addEventListener("click", () => {
  state.done.clear();
  saveProgress();
  render();
});

analyzePrompt.addEventListener("click", renderPromptScore);

loadPromptExample.addEventListener("click", () => {
  promptInput.value =
    "Build a safe local learning app for a beginner developer. Context: I want to understand terminal, CLI tools, file types, VS Code, MCP, skills, plugins, and advanced AI workflows. Constraints: use vanilla HTML, CSS, and JavaScript only; do not run real terminal commands; keep it mobile-responsive. Output: create the files and summarize what changed. Verification: check the app in a browser and confirm the simulator cannot execute real shell commands.";
  renderPromptScore();
});

promptInput.value =
  "Make me an app about AI tools. Keep it local and beginner friendly.";

render();
renderFreshmanToolkit();
seedTerminal();
