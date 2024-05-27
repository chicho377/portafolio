import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PortfolioSection = styled.section`
  padding: 60px 20px;
  background: #111;
  color: #fff;
  text-align: center;
`;

const Title = styled.h2`
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  color: #00ffcc;
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  margin: 40px auto;
  max-width: 800px;
`;

const ContactCard = styled.div`
  background: #1a1a1a;
  border-radius: 10px;
  padding: 20px;
  text-align: left;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: calc(50% - 20px);
  max-width: 300px;
  margin: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ContactTitle = styled.h3`
  color: #00ffcc;
  font-size: 1.5rem;
`;

const ContactText = styled.p`
  color: #ddd;
`;

const ContactButton = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  color: #fff;
  background: #00ffcc;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #00bfa5;
  }
`;

const ModalOverlay = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #1a1a1a;
  color: #fff;
  width: 300px;
  padding: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const ModalClose = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #ccc;
  font-size: 1.2rem;
`;

const Contacts = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    email: '',
  });

  const openModal = (title, email) => {
    setModalContent({
      title,
      email,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = (data) => {
    // Simulación de envío de mensaje
    setTimeout(() => {
      toast.success('¡Mensaje enviado correctamente!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      reset(); // Limpiar el formulario después de enviar
    }, 1000);
  };

  return (
    <PortfolioSection id="portfolio">
      <Title>Contact Me</Title>
      <ContactContainer>
        <ContactCard>
          <ContactTitle>Desarrollador Web</ContactTitle>
          <ContactText>
            Experimentado en la construcción de aplicaciones web responsivas.
            ¡Hablemos de tu proyecto!
          </ContactText>
          <ContactButton onClick={() => openModal('Desarrollador Web', 'morafabricio86@gmail.com')}>Contáctame</ContactButton>
        </ContactCard>
        <ContactCard>
          <ContactTitle>Desarrollador Junior</ContactTitle>
          <ContactText>
            Apasionado por aprender y desarrollar nuevas habilidades. ¡Contáctame para colaborar!
          </ContactText>
          <ContactButton onClick={() => openModal('Desarrollador Junior', 'morafabricio86@gmail.com')}>Contáctame</ContactButton>
        </ContactCard>
        <ContactCard>
          <ContactTitle>Desarrollador Fullstack</ContactTitle>
          <ContactText>
            Experto en desarrollo tanto front-end como back-end. ¡Construyamos grandes cosas juntos!
          </ContactText>
          <ContactButton onClick={() => openModal('Desarrollador Fullstack', 'morafabricio86@gmail.com')}>Contáctame</ContactButton>
        </ContactCard>
      </ContactContainer>
      <ModalOverlay isOpen={isModalOpen} onClick={closeModal}>
        <ModalContent>
          <ModalClose onClick={closeModal}>&times;</ModalClose>
          <ContactTitle>{modalContent.title}</ContactTitle>
          <p>Email: {modalContent.email}</p>
        </ModalContent>
      </ModalOverlay>
      <ToastContainer />
    </PortfolioSection>
  );
};

export default Contacts;
