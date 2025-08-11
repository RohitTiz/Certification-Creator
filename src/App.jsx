import { useRef, useState } from 'react';
import Form from './components/Form';
import Certificate from './components/Certificate';
import DownloadButton from './components/DownloadButton';
import React from 'react';

export default function App() {
  const [certificateData, setCertificateData] = useState(null);
  const certificateRef = useRef();

  const handleGenerateAnother = () => {
    setCertificateData(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {!certificateData ? (
          <Form onGenerate={setCertificateData} />
        ) : (
          <div className="space-y-8">
            <div 
              ref={certificateRef}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <Certificate data={certificateData} />
            </div>
            
            <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:justify-center">
              <DownloadButton 
                certificateRef={certificateRef} 
                studentName={certificateData.studentName} 
              />
              
              {/* <button
                onClick={handleGenerateAnother}
                className="px-6 py-2 bg-gray-600 text-white rounded-lg font-medium shadow-md hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Generate Another Certificate
              </button> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}