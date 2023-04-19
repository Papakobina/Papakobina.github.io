import React, { useState } from 'react';

const Modals = ({ isOpen, onClose }) => {
  const [modalOpen, setModalOpen] = useState(isOpen);
  
  const handleClose = () => {
    setModalOpen(false);
    onClose();
  }
  
  return (
    <div style={{ display: modalOpen ? 'block' : 'none' }}>
      <div className="modal-background" onClick={handleClose}></div>
      <div className="modal-content">
        <h1>Modal Content Here</h1>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}

export default Modals;
