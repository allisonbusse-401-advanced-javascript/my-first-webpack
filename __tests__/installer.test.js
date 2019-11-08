const installer = require('../dependencies/installer');
const childProcess = require('child_process');


childProcess.execSync = jest.fn();

describe('Installing Dependencies', () => {

  it('installs dev dependences', () => {
    installer('./data/test.txt', ['hi', 'there'], true);
    expect(childProcess.execSync.mock.calls[0][0]).toEqual('npm i -D hi there');
  });

  it('installs dependences', () => {
    installer('./data/test.txt', ['hi', 'there'], false);
    expect(childProcess.execSync.mock.calls[1][0]).toEqual('npm i  hi there');
  });


});
