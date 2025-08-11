import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React from 'react';

export default function DownloadButton({ certificateRef, studentName = '' }) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState(null);

  const downloadOptions = [
    { format: 'PNG', action: downloadAsPNG },
    { format: 'PDF', action: downloadAsPDF }
  ];

  const cleanFileName = (name) => {
    return name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
  };

  async function downloadAsPNG() {
    try {
      setIsDownloading(true);
      setDownloadStatus('Preparing PNG download...');
      
      const certificateElement = certificateRef.current;
      const canvas = await html2canvas(certificateElement, {
        scale: 2,
        logging: false,
        useCORS: true
      });
      
      const fileName = studentName 
        ? `lets-code-brain-certificate-${cleanFileName(studentName)}.png`
        : 'lets-code-brain-certificate.png';
      
      const link = document.createElement('a');
      link.download = fileName;
      link.href = canvas.toDataURL('image/png');
      link.click();
      
      setDownloadStatus('PNG download started!');
      setTimeout(() => setDownloadStatus(null), 3000);
    } catch (error) {
      console.error('Error generating PNG:', error);
      setDownloadStatus('Error generating PNG. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  }

  async function downloadAsPDF() {
    try {
      setIsDownloading(true);
      setDownloadStatus('Preparing PDF download...');
      
      const certificateElement = certificateRef.current;
      const canvas = await html2canvas(certificateElement, {
        scale: 2,
        logging: false,
        useCORS: true
      });
      
      const fileName = studentName 
        ? `lets-code-brain-certificate-${cleanFileName(studentName)}.pdf`
        : 'lets-code-brain-certificate.pdf';
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape', 'pt', [canvas.width, canvas.height]);
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save(fileName);
      
      setDownloadStatus('PDF download started!');
      setTimeout(() => setDownloadStatus(null), 3000);
    } catch (error) {
      console.error('Error generating PDF:', error);
      setDownloadStatus('Error generating PDF. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  }

  return (
    <div className="flex flex-col items-center mt-8 space-y-4">
      <div className="flex space-x-4 justify-center">
        {downloadOptions.map((option, index) => (
          <button
            key={index}
            onClick={option.action}
            disabled={isDownloading}
            className={`px-6 py-2 rounded-lg font-medium shadow-md transition-all duration-200 transform hover:scale-105 ${
              option.format === 'PNG' 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-red-600 text-white hover:bg-red-700'
            } ${isDownloading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isDownloading ? 'Processing...' : `Download as ${option.format}`}
          </button>
        ))}
      </div>
      
      {downloadStatus && (
        <div className={`text-sm p-2 rounded ${
          downloadStatus.includes('Error') 
            ? 'bg-red-100 text-red-800' 
            : 'bg-green-100 text-green-800'
        }`}>
          {downloadStatus}
        </div>
      )}
    </div>
  );
}