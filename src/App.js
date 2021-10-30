import { useState } from 'react';
import Button from './components/common/buttons/Button';
import Modal from './components/Modal/Modal';
import RegistrationForm from './components/registration_form/RegistrationForm';

function App() {
  // Hooks
  // -- state
  const [isOpen, setIsOpen] = useState(false);

  // Custom functions
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Button text='Open modal' action={openModal} />

      {isOpen && (
        <Modal onClose={closeModal}>
          <RegistrationForm />
        </Modal>
      )}
    </>
  );
}

export default App;
