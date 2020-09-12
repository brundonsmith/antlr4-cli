#! /usr/bin/env node

var execFile = require('child_process').execFile;

var arguments = process.argv.splice(2);
execFile('java', ['-jar', __dirname+'/antlr-4.5-complete.jar'].concat(arguments), (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});
