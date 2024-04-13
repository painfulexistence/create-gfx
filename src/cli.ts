#!/usr/bin/env node

import { create } from 'create-create-x';
import { resolve } from 'path';

const templateRoot = resolve(__dirname, '..', 'templates');

const caveat = `
Done!
`;

create('create-gfx', {
  templateRoot,
  caveat,
});
