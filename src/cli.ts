#!/usr/bin/env node
import { resolve } from "node:path";
import { create } from "create-create-x";

const templateRoot = resolve(__dirname, "..", "templates");

const caveat = (answers) => {
    return `
        Done! Now run:
        cd ${answers.name}
    `;
};

create("create-gfx", {
    templateRoot,
    caveat,
    promptForTemplate: true,
    defaultTemplate: "minimal"
});
