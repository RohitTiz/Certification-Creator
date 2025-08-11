import React from 'react';

export default function Certificate({ data }) {
  // Generate random signature-like pattern
  const randomSignature = () => {
    const lines = [];
    for (let i = 0; i < Math.floor(Math.random() * 3) + 2; i++) {
      lines.push(
        <div 
          key={i}
          className="h-1 bg-gray-700 rounded-full"
          style={{
            width: `${Math.floor(Math.random() * 60) + 40}px`,
            marginLeft: `${Math.floor(Math.random() * 20)}px`,
            marginBottom: '2px'
          }}
        />
      );
    }
    return lines;
  };

  // Generate certificate ID only once per render
  const certificateId = `LC-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-8 px-4">
      {/* Certificate container */}
      <div className="w-full max-w-5xl mb-8">
        <div className="certificate-container bg-white p-6 sm:p-12 border-8 border-indigo-100 rounded-xl shadow-2xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#6366F1" d="M45.2,-58.9C58.1,-46.8,67.6,-31.4,71.3,-14.7C75,2.1,72.9,20.1,62.3,34.3C51.7,48.5,32.6,58.8,12.3,65.3C-8.1,71.8,-29.7,74.5,-45.8,65.1C-61.9,55.7,-72.4,34.2,-75.3,11.8C-78.2,-10.6,-73.5,-33.9,-59.2,-49.1C-44.9,-64.3,-20.9,-71.3,-1.2,-70.4C18.5,-69.4,37,-60.5,45.2,-58.9Z" transform="translate(100 100)" />
            </svg>
          </div>
          
          {/* Certificate content */}
          <div className="relative z-10">
            <div className="text-center mb-8 sm:mb-12">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold text-indigo-800 mb-2">Let's Code Brain</h1>
              <p className="text-gray-500 uppercase tracking-widest text-xs sm:text-sm">Certificate of Completion</p>
            </div>
            
            <div className="text-center mb-8 sm:mb-12">
              <p className="text-gray-600 mb-4 sm:mb-6">This is to certify that</p>
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 px-4 py-2 bg-indigo-50 rounded-lg inline-block">
                {data.studentName}
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">from <span className="font-semibold">{data.collegeName}</span></p>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">has successfully completed the <span className="font-semibold">{data.hoursCompleted}-hour</span> workshop on</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-3 sm:mb-4">{data.workshopTopic}</h3>
              <p className="text-lg sm:text-xl text-gray-700 mb-2">as part of the <span className="font-semibold">{data.selectedCourse}</span> program</p>
              <p className="text-base sm:text-lg text-gray-600">conducted on {data.workshopDate}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between mt-8 sm:mt-16 space-y-8 sm:space-y-0">
              <div className="text-center">
                <div className="mb-2">
                  {randomSignature()}
                </div>
                <div className="border-t-2 border-gray-400 w-32 mx-auto"></div>
                <p className="text-sm font-medium text-gray-700 mt-2">{data.instructorName}</p>
                <p className="text-xs text-gray-500">Instructor</p>
              </div>
              
              <div className="text-center">
                <div className="mb-2">
                  {randomSignature()}
                </div>
                <div className="border-t-2 border-gray-400 w-32 mx-auto"></div>
                <p className="text-sm font-medium text-gray-700 mt-2">Let's Code Brain</p>
                <p className="text-xs text-gray-500">Authorized Signature</p>
              </div>
            </div>
            
            <div className="mt-8 sm:mt-12 text-center">
              <p className="text-xs text-gray-500">
                Certificate ID: {certificateId}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}