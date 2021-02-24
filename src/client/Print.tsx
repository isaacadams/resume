import * as React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { getResumeName } from './ResumeNamer';

export function Print({ cssSelector }): JSX.Element {
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
  let margin = 30;

  html2canvas(node, {
    allowTaint: true,
    scale: 3, // Adjusts your resolution
  }).then((canvas) => {
    let image = canvas.toDataURL('image/png', 1);
    let format = calculateJSPDFFormat(w, h, margin);
    let pdf = new jsPDF('portrait', 'pt', format);
    pdf.addImage(image, 'PNG', margin, margin, w, h);
    let data = pdf.output('datauristring');
    fetch(`http://localhost:3000/print`, {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/pdf',
      },
    })
      .then(console.log)
      .catch(console.error);

    //pdf.save(`${getResumeName()}.pdf`);
  }, console.error);
}

/**
 * CREDIT: https://www.freakyjolly.com/multipage-canvas-pdf-using-jspdf/
 * @param width width of PDF
 * @param height height of PDF
 * @param margin margins for PDF
 */
function calculateJSPDFFormat(width, height, margin) {
  var PDF_Width = width + margin * 2;
  var PDF_Height = PDF_Width * 1.5 + margin * 2;
  return [PDF_Width, PDF_Height];
}

function getDimensionsFromNode(node: HTMLBaseElement) {
  return [node.offsetWidth, node.offsetHeight];
}
