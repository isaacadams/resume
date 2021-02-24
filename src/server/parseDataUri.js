// ref: https://tools.ietf.org/html/rfc2397
function parseDataUri(datauri) {
  let [url, data] = datauri.split(',');
  let uri = url.split(':')[1];
  let [mime, ...remaining] = uri.split(';');
  let [encoding, ...parameters] = remaining.reverse();
  return parameters.reduce(
    (accumulator, current, index, array) => {
      let [key, value] = current.split('=');
      accumulator[key] = value;
      return accumulator;
    },
    {
      mime,
      encoding,
      data,
      raw: url,
    }
  );
}

module.exports = parseDataUri;
