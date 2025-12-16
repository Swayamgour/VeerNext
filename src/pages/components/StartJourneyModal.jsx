import React, { useState } from 'react';

const StartJourneyModal = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    qualification: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You can add API call or form handling logic
    onClose();
  };

  if (!show) return null;

  return (
    <div 
      className="modal fade start-journey-modal show" 
      id="startJourney" 
      tabIndex="-1" 
      aria-labelledby="startJourneyLabel" 
      style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="startJourneyLabel">Begin Your Defense Career</h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form id="defenseForm" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="fullName" 
                  placeholder="Enter your full name" 
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  placeholder="Enter your email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input 
                  type="tel" 
                  className="form-control" 
                  id="phone" 
                  placeholder="Enter your phone number" 
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="course" className="form-label">Select Course</label>
                <select 
                  className="form-select form-control" 
                  id="course" 
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Choose your defense course</option>
                  <option value="nda">NDA/NA Foundation</option>
                  <option value="cds">CDS (Combined Defense Services)</option>
                  <option value="afcat">AFCAT (Air Force Common Admission Test)</option>
                  <option value="ssb">SSB Interview Training</option>
                  <option value="other">Other Defense Exams</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="qualification" className="form-label">Highest Qualification</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="qualification" 
                  placeholder="e.g., 12th Pass, Graduation" 
                  value={formData.qualification}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn grd-btn">Submit Application</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const VtxDemoModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div 
      className="modal fade show" 
      id="vtxDemoModal" 
      tabIndex="-1"
      style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content" style={{ background: '#0f1316', color: '#fff', border: '1px solid rgba(212, 175, 55, 0.1)' }}>
          <div className="modal-header" style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
            <h5 className="modal-title">VeerNXT Platform Demo</h5>
            <button 
              type="button" 
              className="btn-close btn-close-white" 
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body p-0">
            <div className="ratio ratio-16x9">
              <div className="d-flex align-items-center justify-content-center" style={{ background: 'rgba(0,0,0,0.3)' }}>
                <div className="text-center">
                  <i className="fas fa-play-circle fa-4x text-muted mb-3"></i>
                  <p>Platform Demo Video</p>
                  <p className="small text-muted">[Demo video would play here]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component with modal state management
const App = () => {
  const [showStartJourneyModal, setShowStartJourneyModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  return (
    <div className="App">
      {/* Your main app content */}
      <button 
        className="btn btn-primary" 
        onClick={() => setShowStartJourneyModal(true)}
      >
        Start Journey
      </button>
      
      <button 
        className="btn btn-secondary" 
        onClick={() => setShowDemoModal(true)}
      >
        View Demo
      </button>

      {/* Modals */}
      <StartJourneyModal 
        show={showStartJourneyModal} 
        onClose={() => setShowStartJourneyModal(false)} 
      />
      
      <VtxDemoModal 
        show={showDemoModal} 
        onClose={() => setShowDemoModal(false)} 
      />
    </div>
  );
};

export default App;