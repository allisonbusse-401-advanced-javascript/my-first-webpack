const { write } = require('./writer');

function indexWriter(path) {
  const str = `<!DOCTYPE html>
 <html lang="en">
 <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title></title>
 </head>
 <body>
   <div id="root"></div>
 </body>
 </html>`;
  write(str, `${path}/src/index.html`);
  const strTwo = `import React from 'react';
 import { render } from 'react-dom';
 import App from './components/App';
 
 render(
   <App />,
   document.getElementById('root')
 );`;
  write(strTwo, `${path}/src/index.js`);
}

module.exports = indexWriter;