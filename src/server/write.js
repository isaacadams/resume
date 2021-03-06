const fs = require('fs');
const path = require('path');

/**
 *
 * @param {string} filename
 * @param {any} data
 * @param {BufferEncoding} encoding
 */
function writeToFile(filename, data, encoding) {
  return new Promise((res, rej) => {
    let writeStream = fs.createWriteStream(filename);
    // write some data with a base64 encoding
    writeStream.write(data, encoding);
    // the finish event is emitted when all data has been flushed from the stream
    writeStream.on('finish', () => {
      res(`finished writing ${filename}`);
    });
    writeStream.on('error', rej);
    // close the stream
    writeStream.end();
  });
}

function ensureFolderExists(pathLike) {
  [first, ...remaining] = pathLike.split(path.sep);
  remaining.reduce(reducer, [first]).forEach(checkAndCreate);

  function checkAndCreate(name) {
    if (fs.existsSync(name)) return;
    fs.mkdirSync(name);
  }

  function reducer(accumulator, item, index, array) {
    let previous = accumulator[index];
    accumulator[index + 1] = path.join(previous, item);
    return accumulator;
  }
}

/**
 * %Y - year
 * %m - month
 * %d - day
 * %H - hour
 * %M - minute
 * %S - seconds
 * @param {Date | string | number} dateLike the date object to format
 * @param {string} fstr the format string
 * @param {boolean} useUtc use utc time or not
 * @returns {string} dateFormat (new Date (), "%Y-%m-%d %H:%M:%S", true) returns "2012-05-18 05:37:21"
 */
function dateFormat(dateLike, fstr, useUtc) {
  let date = new Date(dateLike);
  let getFunction = useUtc ? 'getUTC' : 'get';
  return fstr.replace(/%[YmdHMS]/g, function (m) {
    switch (m) {
      case '%Y':
        return date[getFunction + 'FullYear'](); // no leading zeros required
      case '%m':
        m = 1 + date[getFunction + 'Month']();
        break;
      case '%d':
        m = date[getFunction + 'Date']();
        break;
      case '%H':
        m = date[getFunction + 'Hours']();
        break;
      case '%M':
        m = date[getFunction + 'Minutes']();
        break;
      case '%S':
        m = date[getFunction + 'Seconds']();
        break;
      default:
        return m.slice(1); // unknown code, remove %
    }
    // add leading zero if required
    return ('0' + m).slice(-2);
  });
}

module.exports = {
  writeToFile,
  ensureFolderExists,
  dateFormat,
};
