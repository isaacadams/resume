import * as React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { getResumeName } from './ResumeNamer';

export function Print({ cssSelector }): JSX.Element {
  let [canvas, setCanvas] = React.useState<HTMLCanvasElement>(null);
  React.useEffect(() => {
    printSelection(cssSelector).then((c) => {
      setCanvas(c);
    });
    return () => {};
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button onClick={() => printSelection(cssSelector)}>Print</button>
    </div>
  );
}

// on 'toDataURL': https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
// on MIME: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types

function printSelection(cssSelector) {
  let node = document.querySelector<HTMLBaseElement>(cssSelector);
  let [w, h] = getDimensionsFromNode(node);
  let margin = 0.5;
  let filename = `${getResumeName()}.pdf`;

  console.log(`
    x
      scroll: ${node.scrollLeft}
      client: ${node.clientLeft}
      offset: ${node.offsetLeft}
    
    width
      scroll: ${node.scrollWidth}
      client: ${node.clientWidth}
      offset: ${node.offsetWidth}
  `);
  return html2canvas(node, {
    allowTaint: true,
    scale: 5,
  }).then(
    (canvas) => {
      let image = canvas.toDataURL('image/png', 1);

      h = canvas.height = getA4FormatInInches().height; // convertToInches(canvas.height);
      w = canvas.width = getA4FormatInInches().width; // convertToInches(canvas.width);

      let format = addMarginToAllSides(w, h, margin);
      let pdf = new jsPDF('portrait', 'in', format, true);
      // the true at the end is compression! very important for most platforms have a size limit

      pdf.addImage(image, 'PNG', margin, margin, w, h);
      //sendPDFToServer(pdf.output('datauristring', { filename }));
      //pdf.save(filename);
      return canvas;
    },
    (e) => {
      console.error(e);
      return null;
    }
  );
}

async function sendPDFToServer(pdf) {
  await fetch(`http://localhost:3000/print`, {
    method: 'POST',
    body: pdf,
    headers: {
      'Content-Type': 'application/pdf',
    },
  })
    .then(console.log)
    .catch(console.error);
}

/**
 * CREDIT: https://www.freakyjolly.com/multipage-canvas-pdf-using-jspdf/
 * @param width width of PDF
 * @param height height of PDF
 * @param margin margins for PDF
 */
function addMarginToAllSides(width, height, margin) {
  var PDF_Width = width + margin * 2;
  var PDF_Height = height + margin * 2;
  return [PDF_Width, PDF_Height];
}

function getDimensionsFromNode(node: HTMLBaseElement) {
  return [node.offsetWidth, node.offsetHeight];
}

function convertToInches(pixels) {
  //1 in = 96 pixel (X)
  return pixels / 96;
}

//A4 8.27 in x 11.69 in
function getA4FormatInInches() {
  return {
    width: 8.27,
    height: 11.69,
  };
}
