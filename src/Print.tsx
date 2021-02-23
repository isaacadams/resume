import * as React from 'react';
import html2canvas from 'html2canvas';

export function Print({ cssSelector }): JSX.Element {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button onClick={() => printSelection(cssSelector)}>Print</button>
    </div>
  );
}

function printSelection(cssSelector) {
  html2canvas(document.querySelector(cssSelector)).then((canvas) => {
    //document.body.appendChild(canvas);
    //let pdf = canvas.toDataURL('application/pdf');
    //download('resume.pdf', pdf);
    let jpeg = canvas.toDataURL('image/jpeg');
    download('resume.jpeg', jpeg);
  });
}

function download(filename, data) {
  const a = document.createElement('a');
  a.href = data;
  console.log(a.href);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// on 'toDataURL': https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
// on MIME: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
