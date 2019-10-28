const { write, writeJson } = require('../writers/writer');
const fs = require('fs');

fs.writeFileSync = jest.fn();

describe('Writing Files', () => {

  it('writes a file given a path and string', () => {
    write('hello', './data/hi.txt');
    expect(fs.writeFileSync.mock.calls[0][0]).toEqual('./data/hi.txt');
    expect(fs.writeFileSync.mock.calls[0][1]).toEqual('hello');
  });

  it('writes a file given a path and an object', () => {
    writeJson({ name: 'allison' }, './data/hi.txt');
    expect(fs.writeFileSync.mock.calls[1][0]).toEqual('./data/hi.txt');
    expect(fs.writeFileSync.mock.calls[1][1]).toEqual(JSON.stringify({ name: 'allison' }));
  });
});
