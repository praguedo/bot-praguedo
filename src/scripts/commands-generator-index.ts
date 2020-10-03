/**
 * Author: Erivelto Muller
 * 29/09/2020
 * @type {module:fs}
 */

import fs from 'fs';

const getIndexArquive = (commandsName: string[]) => {
  let arquive = '';

  commandsName.splice(commandsName.indexOf('index'), 1);
  commandsName.forEach(command => {
    const newCommand = `export { default as ${command} } from './${command}';\n`;
    arquive += newCommand;
  });

  return arquive;
};

const createIndexFile = (commandsName: string[]) => {
  fs.writeFile(
    './src/commands/index.ts',
    getIndexArquive(commandsName),
    err => {
      if (err) throw err;
      console.log('Create commands Index.ts');
    },
  );
};

fs.readdir('./src/commands', (err, paths) => {
  const commands: Array<string> = [];
  paths.forEach(path => {
    const [command] = path.split('.');
    commands.push(command);
  });

  createIndexFile(commands);
});
