#!/usr/bin/env node

var program = require('commander')
var pkg = require('../package.json')
var CloudEditor = require('../')
var path = require('path')

program
    .version(pkg.version)
    .option('-f --file [value]', 'editor a file', String)
    .option('-p --port [value]', 'web page port', Number)
    .option('-t --fileType [value]', 'file type', String)
    .parse(process.argv)

new CloudEditor(program.port || 9000, {
    filePath: program.file,
    fileType: program.fileType || null
})