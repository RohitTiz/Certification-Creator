import React from "react";


export default function Certificate({ data }) {
  return (
    <div className="certificate-container bg-white p-8 max-w-4xl mx-auto border-4 border-blue-800 rounded-lg shadow-xl">
      <div className="header text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">Certificate of Participation</h1>
        <p className="text-gray-600">This is to certify that</p>
      </div>
      
      <div className="body text-center mb-8">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">{data.name}</h2>
        <p className="text-lg mb-4">from <span className="font-medium">{data.college}</span></p>
        <p className="text-lg mb-4">has successfully completed the workshop on</p>
        <h3 className="text-2xl font-bold text-blue-800 mb-4">{data.topic}</h3>
        <p className="text-lg">conducted by <span className="font-medium">{data.educator}</span></p>
        <p className="text-lg mt-4">on {data.date}</p>
      </div>
      
      <div className="footer flex justify-between mt-12">
        <div className="signature">
          <div className="border-t-2 border-gray-400 w-32"></div>
          <p className="text-sm">Instructor's Signature</p>
        </div>
        <div className="signature">
          <div className="border-t-2 border-gray-400 w-32"></div>
          <p className="text-sm">Date</p>
        </div>
      </div>
    </div>
  );
}