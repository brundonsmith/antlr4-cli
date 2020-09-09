#! /usr/bin/env node

var shell = require('shelljs');

var arguments = process.argv.splice(2);

for (i=0;i<arguments.length; i++){
  arguments[i] = arguments[i].replace(/'|"|;|&|,|\\|\|/gi, '')
}

var arguments = ' ' + arguments.join(' ');
shell.exec('java -jar ' + __dirname + '/antlr-4.5-complete.jar' + arguments);
