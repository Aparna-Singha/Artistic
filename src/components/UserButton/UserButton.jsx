import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugSaucer, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { useStorage } from '../../hooks/storage';

import Modal from '../Modal/Modal'; 

import "./UserButton.css";

const BottomButton = () => {
  const { getStorage } = useStorage();
  const loggedOut = getStorage('username', null) === null;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  if (loggedOut) {
    return (
      <Link to="/auth">
        <button className="user-button logged-out" onClick={openModal}>
          <FontAwesomeIcon icon={faSignIn} size="lg" />
        </button>
      </Link>
    );
  }

  return (
    <>
      <button className="user-button" onClick={openModal}>
        <FontAwesomeIcon icon={faMugSaucer} size="lg" />
      </button>

      <Modal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default BottomButton;