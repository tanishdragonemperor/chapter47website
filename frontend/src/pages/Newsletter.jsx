
import React from 'react';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Worker, Viewer } from '@react-pdf-viewer/core';


// Import the PDF file from the same directory
import newsletterPdf from '../assets/newsletter2.pdf';

const Newsletter = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full h-full max-w-6xl bg-white shadow-lg rounded-lg">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
          <Viewer fileUrl={newsletterPdf} />
        </Worker>
      </div>
    </div>
  );
};

export default Newsletter;
