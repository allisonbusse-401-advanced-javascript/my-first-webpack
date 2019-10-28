const { write } = require('./writer');

function writeTravis(path) {
  const str = `language: node_js
  node_js: node`;
  write(str, `${path}/travis.yml`);
}
module.exports = writeTravis;