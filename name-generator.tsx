import React, { useState } from 'react';

const NameGenerator = () => {
  const [generatedName, setGeneratedName] = useState('');

  const names = {
    first: ['Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'William', 'Sophia', 'James', 'Isabella', 'Oliver'],
    last: ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez']
  };

  const generateRandomName = () => {
    const firstName = names.first[Math.floor(Math.random() * names.first.length)];
    const lastName = names.last[Math.floor(Math.random() * names.last.length)];
    setGeneratedName(`${firstName} ${lastName}`);
  };

  return (
    <div className="relative min-h-[400px] w-full bg-gradient-to-r from-blue-50 to-indigo-50">
      {/* Background Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}>
      </div>
      
      {/* Content */}
      <div className="relative flex flex-col items-center justify-center min-h-[400px] p-8">
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Name Generator</h2>
          
          <div className="text-center">
            <button 
              onClick={generateRandomName}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg mb-6 transition-colors"
            >
              Generate Name
            </button>
            
            {generatedName && (
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-gray-700">{generatedName}</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameGenerator;
