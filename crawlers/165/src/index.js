import fs from 'fs';

const {command, from} = require('../data/input.json');

switch (command) {
  case 'fetch':
    console.log('fetch~');
    break;

  case 'parse':
    console.log('parse~');
    break;

  default:
    throw new Error('Command not valid');
}
