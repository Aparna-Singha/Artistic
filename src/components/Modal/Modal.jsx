import React, { useContext, useState } from 'react';
import './Modal.css';
import { SubmissionsContext } from '../../context/submissions';

const Modal = ({ isOpen, closeModal }) => {
  const { addSubmission } = useContext(SubmissionsContext);
  const [formData, setFormData] = useState({
    artistName: '',
    artName: '',
    bio: '',
    hoursTaken: '',
    description: '',
    forSale: false,
    price: '',
    artImage: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, artImage: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const toBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    };
  
    let base64Image = '';
    if (formData.artImage) {
      base64Image = await toBase64(formData.artImage);
    }
  
    const submission = {
      ...formData,
      artImage: base64Image,
      timestamp: new Date().toISOString(),
      id: new Date().toISOString(),
    };
    
    addSubmission(submission);
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-header">🎨 Submit Your Art</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <label className="modal-label">
            Artist Name:
            <input type="text" name="artistName" value={formData.artistName} onChange={handleChange} className="modal-input" />
          </label>

          <label className="modal-label">
            Art Name:
            <select name="artName" value={formData.artName} onChange={handleChange} className="modal-input">
              <option value="">Select Art</option>
              <option value="Art1">Art 1</option>
              <option value="Art2">Art 2</option>
              <option value="Art3">Art 3</option>
            </select>
          </label>

          <label className="modal-label">
            Bio of the Art:
            <textarea name="bio" value={formData.bio} onChange={handleChange} className="modal-textarea" />
          </label>

          <label className="modal-label">
            Hours Taken to Draw:
            <input type="number" name="hoursTaken" value={formData.hoursTaken} onChange={handleChange} className="modal-input" />
          </label>

          <label className="modal-label">
            Description:
            <textarea name="description" value={formData.description} onChange={handleChange} className="modal-textarea" />
          </label>

          <label className="modal-checkbox-container">
            For Sale:
            <input type="checkbox" name="forSale" checked={formData.forSale} onChange={handleChange} />
          </label>

          {formData.forSale && (
            <label className="modal-label">
              Price:
              <input type="number" name="price" value={formData.price} onChange={handleChange} className="modal-input" />
            </label>
          )}

          <label className="modal-label">
            Upload Art Image:
            <input type="file" accept="image/*" onChange={handleImageChange} className="modal-input" />
          </label>

          {formData.artImage && (
            <div className="modal-preview-container">
              <img
                src={URL.createObjectURL(formData.artImage)}
                alt="Preview"
                className="modal-preview-image"
              />
            </div>
          )}

          <button type="submit" className="modal-submit-button">Submit</button>
        </form>
        <button onClick={closeModal} className="modal-close-button">Close</button>
      </div>
    </div>
  );
};

export default Modal;