const fs = require('fs');

function writeToFile(filename, data, encoding) {
  let writeStream = fs.createWriteStream(filename);

  // write some data with a base64 encoding
  writeStream.write(data, encoding);

  // the finish event is emitted when all data has been flushed from the stream
  writeStream.on('finish', () => {
    console.log('finished writing.');
  });

  // close the stream
  writeStream.end();
}

function ensureFolderExists(name) {
  if (fs.existsSync(name)) return;
  fs.mkdirSync(name);
}

module.exports = {
  writeToFile,
  ensureFolderExists,
};
