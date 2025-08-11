import { useRef } from 'react';
import html2canvas from 'html2canvas';
import React from 'react';

export default function DownloadButton({ certificateRef }) {
  const downloadCertificate = () => {
    const certificateElement = certificateRef.current;
    
    html2canvas(certificateElement).then(canvas => {
      const link = document.createElement('a');
      link.download = 'certificate.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  };

  return (
    <button
      onClick={downloadCertificate}
      className="mt-4 py-2 px-6 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
    >
      Download Certificate
    </button>
  );
}