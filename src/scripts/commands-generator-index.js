/**
 * Author: Erivelto Muller
 * 29/09/2020
 * @type {module:fs}
 */

const fs = require('fs');

fs.readdir('./src/commands', (err, paths) => {

  const commands = [];
   paths.forEach(path => {
     commands.push(getCommandName(path))
   })

  createIndexFile(commands);
})

function createIndexFile(commandsName) {

  fs.writeFile('./src/commands/index.ts', getIndexArquive(commandsName), function (err) {
    if (err) throw err;
    console.log('Create commands Index.ts');
  });
}

function getIndexArquive(commandsName) {

  let arquive = '';

  commandsName.splice(commandsName.indexOf("index"), 1)
  commandsName.forEach(command => {
    const newCommand = `export { default as ${command} } from './${command}';\n`;
    arquive += newCommand;
  });

  return arquive;
}

function getCommandName(path) {

  return path.split(".")[0]
}
