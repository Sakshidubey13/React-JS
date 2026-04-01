import React from 'react';
import AstrologyForm from './AstrologyForm';
import NumerologyForm from './NumerologyForm';
import LoShuGrid from './LoShuGrid';

const FormContainer = ({ formData, onInputChange }) => {
  return (
    <div className="form-container">
      <div className="clipboard-effect"></div>
      
      <AstrologyForm formData={formData} onInputChange={onInputChange} />
      
      <div className="section-separator"></div>
      
      <NumerologyForm formData={formData} onInputChange={onInputChange} />
      
      <div className="section-separator"></div>
      
      <LoShuGrid />
    </div>
  );
};

export default FormContainer;