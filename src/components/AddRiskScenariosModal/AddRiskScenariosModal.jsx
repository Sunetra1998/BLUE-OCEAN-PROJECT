import React, { useState } from 'react';
import './AddRiskScenariosModal.scss'; // Import your SCSS file for styling

const AddRiskScenariosModal = ({ isOpen, onClose }) => {
  const [scenario, setScenario] = useState("");
  const [description, setDescription] = useState("");

  const handleScenarioChange = (event) => setScenario(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);

  if (!isOpen) return null;

  const TextField = ({ label, value, onChange }) => (
    <div className="text-field">
      <label htmlFor={label}>{label}</label>
      <input type="text" id={label} value={value} onChange={onChange} />
    </div>
  );
  const Button = ({ color, bgColor, text, borderColor }) => {
    const styles = {
      color: color,
      backgroundColor: bgColor,
      borderColor: borderColor,
    };
    return (
      <button className="btn-new" style={styles}>
        {text}
      </button>
    );
  };
  const SelectField = ({ label, options, value, onChange }) => (
    <div className="select-field">
      <label htmlFor={label}>{label}</label>
      <select id={label} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );

  const RiskDetails = () => {
    return (
      <div className="risk-details">
        <div className="risk-details_1">
          <TextField label="Risk-1" value="" onChange={() => { }} />
          <TextField label="Risk-2" value="" onChange={() => { }} />
        </div>

        <div className="key-value">
          <SelectField
            label="Key"
            options={["book", "copy"]}
            value=""
            onChange={() => { }}
          />
          <TextField label="Enter Value" value="" onChange={() => { }} />
        </div>
        <a className="add-key">+ Add New Key</a>
      </div>
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <h3>Add Risk Scenario</h3>
        <div className="modal-body">
          <form className="risk-form">
            <TextField
              label="Enter risk scenario"
              value={scenario}
              onChange={handleScenarioChange}
            />
            <TextField
              label="Enter risk description"
              value={description}
              onChange={handleDescriptionChange}
            />
            <RiskDetails />
            <hr />
            <div className="buttons">
            <Button
              text="cancel"
              color="red"
              bgColor="white"
              borderColor="red"
            />
            <div className="btn">
              <Button
                text="Save as Draft"
                color="#007bff"
                bgColor="white"
                borderColor="#007bff"
              />
              <Button
                text="Submit"
                color="white"
                bgColor="#007bff"
                borderColor="transparent"
              />
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRiskScenariosModal;
