const installer = require('./installer');

function dependencyInstaller(path) {
  const packages = [
    'react',
    'react-dom',
    'react-router-dom'
  ];
  installer(path, packages, false);
}

module.exports = dependencyInstaller;