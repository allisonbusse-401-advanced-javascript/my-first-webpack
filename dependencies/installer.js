
function install(path, packages, dev) {
  console.log('starting dependency install');
  const { execSync } = require('child_process');
  let d;
  if(dev) d = '-D';
  if(!dev) d = '';
  execSync(`npm i ${d} ${packages.join(' ')}`, {
    cwd: path,
    stdio: 'inherit'
  });
  console.log('done installing dependencies');
}

module.exports = install;