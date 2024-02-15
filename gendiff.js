#!/usr/bin/env node
import { Command } from 'commander';

import parse from './functions/parserFunc.js';
import differences from './functions/differences.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .helpOption('-h, --help', 'output usage information')
  .action((filepath1, filepath2) => {
    const oneObj = parse(filepath1);
    const twoObj = parse(filepath2);
    console.log(differences(oneObj, twoObj));
  });
program.parse();
