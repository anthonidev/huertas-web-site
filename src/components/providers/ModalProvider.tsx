'use client';
import { useEffect, useState } from 'react';
import WelcomeModal from '../common/WelcomeModal';

export function ModalProvider() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Mostrar el modal después de un breve retraso para una mejor experiencia de usuario
    const timer = setTimeout(() => {
      setModalOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setModalOpen(false);
  };

  return <WelcomeModal isOpen={modalOpen} onClose={closeModal} />;
}
