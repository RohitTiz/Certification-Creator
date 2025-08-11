import { useRef, useState } from 'react';
import Form from './components/Form';
import Certificate from './components/Certificate';
import DownloadButton from './components/DownloadButton';
import React from 'react';

export default function App() {
  const [certificateData, setCertificateData] = useState(null);
  const certificateRef = useRef();

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      {!certificateData ? (
        <Form onGenerate={setCertificateData} />
      ) : (
        <div className="space-y-6">
          <div ref={certificateRef}>
            <Certificate data={certificateData} />
          </div>
          <div className="text-center">
            <DownloadButton certificateRef={certificateRef} />
            <button
              onClick={() => setCertificateData(null)}
              className="ml-4 py-2 px-6 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Generate Another
            </button>
          </div>
        </div>
      )}
    </div>
  );
}