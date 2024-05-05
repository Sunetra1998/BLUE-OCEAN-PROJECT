import React from 'react'
import './AddRiskScenariosModal.scss';

const AddRiskScenariosModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add Risk Scenario</h2>
        <div className="modal-body">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default AddRiskScenariosModal