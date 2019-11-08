#!/usr/bin/env node

const arg = process.argv;
const folder = arg[arg.length - 1];
const fs = require('fs');

if(folder !== '.') fs.mkdirSync(folder);
fs.mkdirSync(`${folder}/src`);

const packageJsonWriter = require('./writers/package-json-writer');
const eslintWriter = require('./writers/eslint-writer');
const gitignoreWriter = require('./writers/gitignore-writer');
const travisWriter = require('./writers/travis-writer');
const babelWrtier = require('./writers/babel-writer');
const webpackWriter = require('./writers/webpack-writer');
const indexWriter = require('./writers/src-index-writer');
const devDependencyInstaller = require('./dependencies/dev-dependencies-installer');
const dependencyInstaller = require('./dependencies/dependencies-installer');

packageJsonWriter(folder);
eslintWriter(folder);
gitignoreWriter(folder);
travisWriter(folder);
babelWrtier(folder);
webpackWriter(folder);
indexWriter(folder);
devDependencyInstaller(folder);
dependencyInstaller(folder);