var request = require("request");
var fs = require('fs');

const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
 
nightmare
    //.goto('https://duckduckgo.com') http://localhost:1234/
    .goto('http://localhost:1234/')
    .evaluate(() => document.querySelector('.content'))
    //.html('./dist/newtest.html', 'HTMLComplete')
    .pdf('./dist/react.pdf', {
      marginsType: 2,
      pageSize: 'Letter'
    })
    .end()
    .then(console.log)
    .catch(error => {
        console.error('Search failed: ', error)
    });

/* request({
  //uri: "http://localhost:1234",
  uri: "https://phantomjs.org/download.html"
}, function(error, response, body) {
  console.log(body);
  fs.writeFileSync('./test.html', body);
}).on('complete', () => {

    console.log('done');
    var html = fs.readFileSync('./test.html', 'utf8');
    var options = { format: 'Letter' };

    pdf.create(html, options).toFile('./test.pdf', function(err, res) {
    if (err) return console.log(err);
    console.log(res); // { filename: '/app/businesscard.pdf' }
    });
}); */