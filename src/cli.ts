#!/usr/bin/env node

import { create } from 'create-create-x';
import { resolve } from 'path';

const templateRoot = resolve(__dirname, '..', 'templates');

const caveat = `
This is a caveat!
You can change this in \`src/cli.ts\`.
`;

create('create-gfx', {
  templateRoot,
  extra: {
    architecture: {
      type: 'list',
      describe: 'choose your fave os',
      choices: ['macOS', 'Windows', 'Linux'],
      prompt: 'if-no-arg',
    },
  },
  after: ({ answers }) => console.log(`Ok you chose ${answers.architecture}.`),
  caveat,
});
