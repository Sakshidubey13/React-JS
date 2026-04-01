import React from "react";

const AstrologyForm = ({ formData, onInputChange }) => {
  return (
    <div className="form-section">
      <h2 className="section-title">ASTROLOGY - ज्योतिष शास्त्र</h2>
      <div className="form-grid">
        <div className="form-group">
          <label>नाम / Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>लिंग / Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={onInputChange}
          >
            <option value="">Select</option>
            <option value="Male">Male - पुरुष</option>
            <option value="Female">Female - महिला</option>
          </select>
        </div>
        <div className="form-group">
          <label>तारीख / Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={onInputChange}
          />
        </div>
        <div className="form-group">
          <label>रिपोर्ट नंबर / Report Number</label>
          <input
            type="text"
            name="reportNumber"
            value={formData.reportNumber}
            onChange={onInputChange}
          />
        </div>
        <div className="form-group full-width">
          <label>जन्म तारीख / Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={onInputChange}
          />
        </div>
        <div className="form-group">
          <label>समय / Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={onInputChange}
          />
        </div>
        <div className="form-group full-width">
          <label>जन्म स्थान / Birth Place</label>
          <input
            type="text"
            name="birthPlace"
            value={formData.birthPlace}
            onChange={onInputChange}
          />
        </div>
        {/* Additional fields */}
        <div className="form-group">
          <label>दिन / Day</label>
          <input
            type="text"
            name="day"
            value={formData.day}
            onChange={onInputChange}
          />
        </div>
        <div className="form-group">
          <label>राशि / Zodiac Sign</label>
          <input
            type="text"
            name="zodiacSign"
            value={formData.zodiacSign}
            onChange={onInputChange}
          />
        </div>
        <div className="form-group">
          <label>लग्न / Ascendant</label>
          <input
            type="text"
            name="ascendant"
            value={formData.ascendant}
            onChange={onInputChange}
          />
        </div>
        {/* Dosha fields */}
        <div className="form-group">
          <label>मांगलिक दोष / Manglik Dosh</label>
          <input
            type="text"
            name="manglikDosh"
            value={formData.manglikDosh}
            onChange={onInputChange}
          />
        </div>
        <div className="form-group">
          <label>काल सर्प दोष / Kaal Sarp Dosh</label>
          <input
            type="text"
            name="kaalSarpDosh"
            value={formData.kaalSarpDosh}
            onChange={onInputChange}
          />
        </div>
        <div className="form-group">
          <label>गुरु चांडाल दोष / Guru Chandal Dosh</label>
          <input
            type="text"
            name="guruChandalDosh"
            value={formData.guruChandalDosh}
            onChange={onInputChange}
          />
        </div>
        <div className="form-group">
          <label>पितृ दोष / Pitra Dosh</label>
          <input
            type="text"
            name="pitraDosh"
            value={formData.pitraDosh}
            onChange={onInputChange}
          />
        </div>
        <div className="form-group">
          <label>अंगारक दोष / Angarak Dosh</label>
          <input
            type="text"
            name="angarakDosh"
            value={formData.angarakDosh}
            onChange={onInputChange}
          />
        </div>
        <div className="form-group">
          <label>विवाह दोष / Vivah Dosh</label>
          <input
            type="text"
            name="vivahDosh"
            value={formData.vivahDosh}
            onChange={onInputChange}
          />
        </div>
        <div className="form-group">
          <label>महादशा / Mahadasha</label>
          <input
            type="text"
            name="mahadasha"
            value={formData.mahadasha}
            onChange={onInputChange}
          />
        </div>
        <div className="form-group">
          <label>लकी स्टार / Lucky Star</label>
          <input
            type="text"
            name="luckyStar"
            value={formData.luckyStar}
            onChange={onInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default AstrologyForm;
