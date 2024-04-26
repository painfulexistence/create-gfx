#!/usr/bin/env node
import { resolve } from "node:path";
import chalk from "chalk";
import { type AfterHookOptions, create } from "create-create-x";

const templateRoot = resolve(__dirname, "..", "templates");

const caveat = (options: AfterHookOptions) => {
    return `
        ${chalk.green("Done! ") + chalk.yellow("Now run:")}
        ${chalk.blue("cd ") + chalk.blue(options.answers.name)}
        ${chalk.blue("npm run dev")}
    `;
};

create("create-gfx", {
    templateRoot,
    caveat,
    promptForTemplate: true,
    defaultTemplate: "minimal"
});
