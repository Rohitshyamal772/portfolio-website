const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function run() {
  try {
    const pdfPath = path.join(__dirname, 'public', 'Resume.pdf');
    const existingPdfBytes = fs.readFileSync(pdfPath);
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    pdfDoc.setTitle('Rohit Shyamal');
    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync(pdfPath, pdfBytes);
    console.log('PDF metadata updated successfully!');
  } catch (e) {
    console.error(e);
  }
}

run();
