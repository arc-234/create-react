#!/usr/bin/env node

import prompts from "prompts";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const [major] = process.versions.node.split(".").map(Number);
if (major < 22) {
  console.error(
    `\n❌ Node.js v22 or higher is required.\n` +
    `   You are running v${process.versions.node}\n\n` +
    `   Please upgrade: https://nodejs.org\n`
  );
  process.exit(1);
}


// Handle Ctrl+C gracefully
const onCancel = () => {
  console.log("\n❌ Installation cancelled.");
  process.exit(1);
};

// Interactive prompts
const answers = await prompts(
  [
    {
      type: "text",
      name: "projectName",
      message: "📁 Project name:",
      initial: "my-app",
      validate: (value) => {
        if (!value.trim()) return "Project name cannot be empty";
        if (fs.existsSync(path.join(process.cwd(), value)))
          return `Folder "${value}" already exists, pick a different name`;
        return true;
      },
    },
    {
      type: "select",
      name: "packageManager",
      message: "📦 Package manager:",
      choices: [
        { title: "npm", value: "npm" },
        { title: "yarn", value: "yarn" },
        { title: "pnpm", value: "pnpm" },
      ],
      initial: 0,
    },
    {
      type: "confirm",
      name: "installDeps",
      message: "⚡ Install dependencies now?",
      initial: true,
    },
  ],
  { onCancel }
);

const { projectName, packageManager, installDeps } = answers;
const targetDir = path.join(process.cwd(), projectName);
const templateDir = path.join(__dirname, "../template");

// Copy template
console.log(`\n⏳ Scaffolding project "${projectName}"...`);
fs.cpSync(templateDir, targetDir, { recursive: true });

// Update package.json name
const pkgPath = path.join(targetDir, "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
pkg.name = projectName;
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

console.log(`✅ Project created!\n`);

// Install dependencies
if (installDeps) {
  console.log(`📦 Installing dependencies with ${packageManager}...\n`);
  try {
    execSync(`${packageManager} install`, {
      cwd: targetDir,
      stdio: "inherit", // streams output live to terminal
    });
    console.log(`\n✅ Dependencies installed!\n`);
  } catch {
    console.log(`\n⚠️  Installation failed. Run manually:\n  cd ${projectName} && ${packageManager} install\n`);
    process.exit(1);
  }
}

// Success message
const runCmd =
  packageManager === "npm" ? "npm run dev" :
  packageManager === "yarn" ? "yarn dev" : "pnpm dev";

console.log(`🎉 All done! To get started:\n`);
if (!installDeps) {
  console.log(`  cd ${projectName}`);
  console.log(`  ${packageManager} install`);
}  else {
  console.log(`  cd ${projectName}`);
}
console.log(`  ${runCmd}\n`);