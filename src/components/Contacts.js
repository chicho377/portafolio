import React from 'react';
import styled from 'styled-components';

const ContactsSection = styled.section`
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

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
  margin: 40px auto;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  resize: none;
`;

const SubmitButton = styled.button`
  padding: 10px;
  font-size: 1.2rem;
  color: #fff;
  background: #00ffcc;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #00bfa5;
  }
`;

const Contacts = () => {
  return (
    <ContactsSection id="contacts">
      <Title>Contact Me</Title>
      <ContactForm>
        <Input type="text" placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <TextArea rows="5" placeholder="Your Message"></TextArea>
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactsSection>
  );
};

export default Contacts;
