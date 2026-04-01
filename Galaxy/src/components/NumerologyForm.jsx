import React from 'react';

const NumerologyForm = ({ formData, onInputChange }) => {
  return (
    <div className="form-section">
      <h2 className="section-title">NUMEROLOGY - अंकशास्त्र</h2>
      <div className="form-grid">
        <div className="form-group">
          <label>जन्म अंक / Birth Number</label>
          <input type="text" name="birthNumber" value={formData.birthNumber} onChange={onInputChange} />
        </div>
        <div className="form-group">
          <label>भाग्य अंक / Destiny Number</label>
          <input type="text" name="destinyNumber" value={formData.destinyNumber} onChange={onInputChange} />
        </div>
        <div className="form-group">
          <label>नाम अंक / Name Number</label>
          <input type="text" name="nameNumber" value={formData.nameNumber} onChange={onInputChange} />
        </div>
        <div className="form-group">
          <label>फेंग शुई कुआ नंबर / Feng Shui Kua Number</label>
          <input type="text" name="fengShuiKua" value={formData.fengShuiKua} onChange={onInputChange} />
        </div>
        <div className="form-group">
          <label>सफलता अंक / Success Number</label>
          <input type="text" name="successNumber" value={formData.successNumber} onChange={onInputChange} />
        </div>
        <div className="form-group">
          <label>लकी नंबर / Lucky Number</label>
          <input type="text" name="luckyNumber" value={formData.luckyNumber} onChange={onInputChange} />
        </div>
        <div className="form-group">
          <label>अनलकी नंबर / Unlucky Number</label>
          <input type="text" name="unluckyNumber" value={formData.unluckyNumber} onChange={onInputChange} />
        </div>
        <div className="form-group">
          <label>लकी कलर / Lucky Colour</label>
          <input type="text" name="luckyColour" value={formData.luckyColour} onChange={onInputChange} />
        </div>
        <div className="form-group">
          <label>अनलकी कलर / Unlucky Colour</label>
          <input type="text" name="unluckyColour" value={formData.unluckyColour} onChange={onInputChange} />
        </div>
        <div className="form-group full-width">
          <label>हस्ताक्षर / Signature</label>
          <input type="text" name="signature" value={formData.signature} onChange={onInputChange} />
        </div>
        <div className="form-group full-width">
          <label>मोबाइल नंबर / Mobile Number</label>
          <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={onInputChange} />
        </div>
      </div>
      </div>
)};