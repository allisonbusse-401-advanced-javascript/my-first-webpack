const { write } = require('./writer');

function gitignoreWriter(path) {
  const str = `node_modules
.env`;
  write(str, `${path}/.gitignore`);
}

module.exports = gitignoreWriter;