import React, {
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';

import { SubmissionsContext } from '../../context/submissions';
import ImageUploader from '../ImageUploader/ImageUploader';

import './Modal.css';
import { useStorage } from '../../hooks/storage';

const Modal = ({ isOpen, closeModal }) => {
  const { submitArt } = useContext(SubmissionsContext);
  const { getStorage } = useStorage();
  const username = getStorage('username', null);

  const [formValid, setFormValid] = useState(false);
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

  const validateForm = useCallback(() => {
    const {
      artistName,
      artName,
      bio,
      hoursTaken,
      description,
      forSale,
      price,
    } = formData;
    
    if (!artistName) return false;
    if (!artName) return false;
    if (!bio) return false;
    if (!hoursTaken || isNaN(hoursTaken) || hoursTaken <= 0) return false;
    if (!description) return false;
    if (forSale && (!price || isNaN(price) || price <= 0)) return false;
    if (!formData.artImage) return false;
    
    return true;
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleImageChange = (url) => {
    setFormData({ ...formData, artImage: url });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const submission = {
      ...formData,
      artImage: formData.artImage,
      timestamp: new Date().toISOString(),
      id: `${username}-${new Date.now()}`,
    };
    
    submitArt(submission);

    closeModal();
  };

  useEffect(() => {
    setFormValid(validateForm());
  }, [formData, validateForm]);
  
  if (!username) return null;
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
            <ImageUploader setImageUrl={handleImageChange} />
          </label>

          {formData.artImage && (
            <div className="modal-preview-container">
              <img
                src={formData.artImage}
                alt="Preview"
                className="modal-preview-image"
              />
            </div>
          )}

          <button
            type="submit"
            className="modal-submit-button"
            disabled={!formValid}
          >
            Submit
          </button>
        </form>

        <button
          onClick={closeModal}
          className="modal-close-button"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;