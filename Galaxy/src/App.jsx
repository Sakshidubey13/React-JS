import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FormContainer from './components/FormContainer';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    // Astrology Section
    name: '',
    gender: '',
    date: '',
    reportNumber: '',
    dob: '',
    time: '',
    birthPlace: '',
    day: '',
    zodiacSign: '',
    ascendant: '',
    manglikDosh: '',
    kaalSarpDosh: '',
    guruChandalDosh: '',
    pitraDosh: '',
    angarakDosh: '',
    vivahDosh: '',
    mahadasha: '',
    luckyStar: '',
    
    // Numerology Section
    birthNumber: '',
    destinyNumber: '',
    nameNumber: '',
    fengShuiKua: '',
    successNumber: '',
    luckyNumber: '',
    unluckyNumber: '',
    luckyColour: '',
    unluckyColour: '',
    signature: '',
    mobileNumber: '',
    
    // Contact Info
    aadityaMobile: '',
    email: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  // Load data from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('galaxyLiveMahavastuData');
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem('galaxyLiveMahavastuData', JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setSuccessMessage('✅ Data saved successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleReset = () => {
    const resetData = {
      name: '', gender: '', date: '', reportNumber: '',
      dob: '', time: '', birthPlace: '', day: '',
      zodiacSign: '', ascendant: '', manglikDosh: '',
      kaalSarpDosh: '', guruChandalDosh: '', pitraDosh: '',
      angarakDosh: '', vivahDosh: '', mahadasha: '', luckyStar: '',
      birthNumber: '', destinyNumber: '', nameNumber: '',
      fengShuiKua: '', successNumber: '', luckyNumber: '',
      unluckyNumber: '', luckyColour: '', unluckyColour: '',
      signature: '', mobileNumber: '', aadityaMobile: '', email: ''
    };
    setFormData(resetData);
    setSuccessMessage('🗑️ Data reset successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    const printWindow = window.open('', '_blank');
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Galaxy Live Mahavastu Report</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          .header { text-align: center; margin-bottom: 30px; }
          .title { 
            font-size: 36px; 
            font-weight: bold; 
            color: #FFD700; 
            text-shadow: 2px 2px 4px #000; 
            margin: 10px 0;
          }
          .form-section { margin: 30px 0; padding: 20px; border: 2px solid #006400; }
          .field { margin: 10px 0; }
          .label { font-weight: bold; color: #006400; }
          .value { font-size: 16px; margin-left: 10px; }
          .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 20px 0; }
          .grid-item { border: 2px solid #006400; padding: 15px; text-align: center; background: #f9f9f9; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 class="title">THE GALAXY LIVE MAHAVASTU</h1>
          <p><strong>Aaditya Kumar:</strong> ${formData.aadityaMobile}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
        </div>
        
        <div class="form-section">
          <h2 style="color: #006400; border-bottom: 2px solid #006400;">ASTROLOGY - ज्योतिष शास्त्र</h2>
          <div class="field"><span class="label">Name:</span> <span class="value">${formData.name}</span></div>
          <div class="field"><span class="label">Gender:</span> <span class="value">${formData.gender}</span></div>
          <div class="field"><span class="label">DOB:</span> <span class="value">${formData.dob}</span></div>
          <!-- Add more fields as needed -->
        </div>
        
        <div class="form-section">
          <h2 style="color: #006400; border-bottom: 2px solid #006400;">NUMEROLOGY - अंकशास्त्र</h2>
          <div class="field"><span class="label">Birth Number:</span> <span class="value">${formData.birthNumber}</span></div>
          <!-- Add more fields -->
        </div>
        
        <div class="form-section">
          <h2 style="color: #006400; border-bottom: 2px solid #006400;">LO SHU GRID</h2>
          <div class="grid">
            <div class="grid-item">4 Rahu</div>
            <div class="grid-item">9 Mangal</div>
            <div class="grid-item">2 Chandra</div>
            <div class="grid-item">3 Guru</div>
            <div class="grid-item">5 Budh</div>
            <div class="grid-item">7 Ketu</div>
            <div class="grid-item">8 Shani</div>
            <div class="grid-item">1 Surya</div>
            <div class="grid-item">6 Shukra</div>
          </div>
        </div>
      </body>
      </html>
    `;
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="App">
      <style>
        {`
          @media print {
            .no-print { display: none !important; }
            .form-container { box-shadow: none !important; border: 2px solid #006400 !important; }
          }
        `}
      </style>
      
      <Header 
        aadityaMobile={formData.aadityaMobile}
        email={formData.email}
        onContactChange={handleInputChange}
      />
      
      <div className="success-message no-print">{successMessage}</div>
      
      <FormContainer formData={formData} onInputChange={handleInputChange} />
      
      <Buttons 
        onSave={handleSave}
        onReset={handleReset}
        onPrint={handlePrint}
        onDownloadPDF={handleDownloadPDF}
      />
    </div>
  );
}

export default App;