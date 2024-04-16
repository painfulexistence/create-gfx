#!/usr/bin/env node
import { resolve } from "node:path";
import { create } from "create-create-x";

const templateRoot = resolve(__dirname, "..", "templates");

const caveat = `
Done!
`;

create("create-gfx", {
    templateRoot,
    caveat
});
