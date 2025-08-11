import { useState } from 'react';
import React from 'react';

export default function Form({ onGenerate }) {
  const courses = [
    "Web Development Fundamentals",
    "Advanced JavaScript",
    "React Masterclass",
    "Node.js Backend Development",
    "Python for Data Science",
    "Machine Learning Basics",
    "Cloud Computing with AWS",
    "DevOps Essentials",
    "Cybersecurity Fundamentals",
    "Blockchain Technology"
  ];

  const [formData, setFormData] = useState({
    studentName: '',
    instructorName: '',
    collegeName: '',
    selectedCourse: courses[0],
    workshopTopic: '',
    workshopDate: '',
    email: '',
    feedback: '',
    hoursCompleted: 2 // Default workshop duration
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-2xl border border-gray-200">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-indigo-800 mb-2">Let's Code Brain Workshop Feedback</h2>
        <p className="text-gray-600">Fill this form to receive your participation certificate</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Student Full Name*</label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
              placeholder="Anjali Singh"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Instructor Name*</label>
            <input
              type="text"
              name="instructorName"
              value={formData.instructorName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
              placeholder="Prof. Shudhanshu"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">College/Institution Name*</label>
            <input
              type="text"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
              placeholder="ABC University"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="singh@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Course*</label>
            <select
              name="selectedCourse"
              value={formData.selectedCourse}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              {courses.map((course, index) => (
                <option key={index} value={course}>{course}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Workshop Duration (hours)*</label>
            <input
              type="number"
              name="hoursCompleted"
              min="1"
              max="50"
              value={formData.hoursCompleted}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Workshop Topic*</label>
          <input
            type="text"
            name="workshopTopic"
            value={formData.workshopTopic}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
            placeholder="React Hooks and Context API"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Workshop Date*</label>
          <input
            type="date"
            name="workshopDate"
            value={formData.workshopDate}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Feedback</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="What did you think about the workshop?"
          ></textarea>
        </div>
        
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
          >
            Generate My Certificate
          </button>
        </div>
      </form>
    </div>
  );
}