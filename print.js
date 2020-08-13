// docs: https://github.com/segmentio/nightmare
const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });
let packageJson = require('./package.json');

nightmare
    .goto('http://localhost:1234/')
    .evaluate(() => document.querySelector('body')) //'.content'))
    .pdf(`./dist/Resume v${packageJson.version}.pdf`, {
      marginsType: 0,
      pageSize: 'A3'
    })
    .end()
    .then(console.log)
    .catch(console.error);
