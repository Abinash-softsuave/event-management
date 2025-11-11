import { useState, useEffect, useCallback } from 'react';

interface UseModalReturn<T = any> {
  isOpen: boolean;
  openModal: (content?: T) => void;
  closeModal: () => void;
  modalContent: T | null;
  setModalContent: React.Dispatch<React.SetStateAction<T | null>>;
}

/**
 * Custom hook for managing modal state and behavior
 * Includes ESC key handling and body scroll lock
 */
export const useModal = <T = any>(): UseModalReturn<T> => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<T | null>(null);

  // Open modal with optional content
  const openModal = useCallback((content: T | null = null) => {
    setModalContent(content);
    setIsOpen(true);
  }, []);

  // Close modal and clear content
  const closeModal = useCallback(() => {
    setIsOpen(false);
    // Delay clearing content to allow exit animation
    setTimeout(() => setModalContent(null), 300);
  }, []);

  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, closeModal]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  return {
    isOpen,
    openModal,
    closeModal,
    modalContent,
    setModalContent,
  };
};

export default useModal;
