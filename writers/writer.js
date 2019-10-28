const fs = require('fs');

function write(str, path) {
  fs.writeFileSync(path, str);
  const n = path.lastIndexOf('/');
  console.log(path.slice(n + 1, path.length) + ' successfully created');
}

function writeJson(obj, path) {
  fs.writeFileSync(path, JSON.stringify(obj));
  const n = path.lastIndexOf('/');
  console.log(path.slice(n + 1, path.length) + ' successfully created');
}


module.exports = {
  write,
  writeJson
}