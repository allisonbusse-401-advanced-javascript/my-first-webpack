const { writeJson } = require('./writer');

function packageJsonWriter(path) {
  const obj = {
    'name': 'starter-code',
    'version': '1.0.0',
    'description': '',
    'main': 'src/index.js',
    'jest': {
      'setupFilesAfterEnv': [
        '<rootDir>src/setupTests.js'
      ],
      'snapshotSerializers': [
        'enzyme-to-json/serializer'
      ],
      'moduleNameMapper': {
        '\\.(css)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js'
      }
    },
    'scripts': {
      'lint': 'eslint .',
      'test': 'jest --verbose',
      'test:watch': 'npm run test -- --watch',
      'start': 'webpack-dev-server --hot --mode development --devtool eval-source-map',
      'build': 'webpack -p --devtool source-map'
    },
    'keywords': [],
    'author': '',
    'license': 'ISC',
    'dependencies': {

    },
    'devDependencies': {

    }
  };

  writeJson(obj, `${path}/package.json`);
}

module.exports = packageJsonWriter;