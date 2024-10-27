// src/pages/SecretPhraseModal.jsx
import React, { useState } from 'react';
import '../styles/SecretPhraseModal.css'; // Update the import path for the CSS
import axios from 'axios';

const SecretPhraseModal = ({ isOpen, onClose }) => {
  const [employeeNumber, setEmployeeNumber] = useState('');

  const handleGenerateSecretPhrase = async () => {
    if (employeeNumber) {
      const userData = {
        employee: {
          employeeNumber: employeeNumber
        }
      };

      try {
        const response = await axios.post('http://localhost:8080/secret-phrase/generate-secret-phrase', userData, {
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
          }
      });
        
        if (response.status === 200) {
          // Success logic (you can add any actions to handle success if needed)
          console.log('Secret phrase generated successfully');
        }
        
      } catch (error) {
        console.error('Error generating secret phrase:', error);
        // You can add error handling logic here if needed
      }

      onClose();  // Close the modal after handling the request
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Generate Secret Phrase</h3>
        {/* Close button inside the modal content */}
        <button className="close-button" onClick={onClose}>
          &times; {/* Using × for a close symbol */}
        </button>
        
        <input
          type="text"
          placeholder="Enter employee number"
          value={employeeNumber}
          onChange={(e) => setEmployeeNumber(e.target.value)}
          className="modal-input"
        />
        <button
          onClick={handleGenerateSecretPhrase}
          disabled={!employeeNumber}
          className="modal-button"
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default SecretPhraseModal;
