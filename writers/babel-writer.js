const writeJson = require('./writer');

function babelWriter(path) {
  const obj = {
    'presets': [
      '@babel/preset-env',
      '@babel/preset-react'
    ],
    'plugins': [
      '@babel/plugin-proposal-class-properties'
    ]
  };
  writeJson(obj, `${path}/.babelrc`);
}

module.exports = babelWriter;