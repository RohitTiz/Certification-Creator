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
              
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
}