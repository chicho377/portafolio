import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import 'react-toastify/dist/ReactToastify.css';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 640px;
`;

const Eyebrow = styled.span`
  font-size: 0.85rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.5);
`;

const Title = styled.h2`
  font-size: clamp(2.1rem, 3.2vw, 2.7rem);
  margin: 0;
  color: #ffffff;
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(233, 233, 255, 0.74);
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 36px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(8, 8, 12, 0.92) 0%, rgba(16, 16, 22, 0.94) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const ChannelList = styled.div`
  display: grid;
  gap: 18px;
`;

const Channel = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 20px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  color: rgba(233, 233, 255, 0.8);
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(0, 255, 204, 0.35);
  }
`;

const ChannelIcon = styled.span`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  background: rgba(0, 255, 204, 0.12);
  color: #00ffcc;
`;

const ChannelText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ChannelTitle = styled.span`
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.65);
`;

const ChannelValue = styled.span`
  font-size: 1.05rem;
  color: #ffffff;
`;

const Form = styled.form`
  display: grid;
  gap: 20px;
  padding: 36px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const FieldGroup = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.9rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.55);
`;

const Input = styled.input`
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(6, 6, 10, 0.6);
  color: #ffffff;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(0, 255, 204, 0.6);
    box-shadow: 0 0 0 3px rgba(0, 255, 204, 0.2);
  }
`;

const TextArea = styled.textarea`
  padding: 16px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(6, 6, 10, 0.6);
  color: #ffffff;
  font-size: 1rem;
  min-height: 160px;
  resize: vertical;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(0, 255, 204, 0.6);
    box-shadow: 0 0 0 3px rgba(0, 255, 204, 0.2);
  }
`;

const Error = styled.span`
  font-size: 0.85rem;
  color: #f472b6;
`;

const Submit = styled.button`
  justify-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 28px;
  border-radius: 18px;
  background: linear-gradient(135deg, #00ffcc 0%, #8b5cf6 100%);
  color: #050505;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 50px rgba(139, 92, 246, 0.35);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.65;
    transform: none;
    box-shadow: none;
  }
`;

const Contacts = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        toast.success('¡Mensaje enviado correctamente! 🚀', {
          position: 'top-right',
          autoClose: 3000,
        });
        reset();
        resolve();
      }, 900);
    });
  };

  return (
    <Section id="contact">
      <TitleGroup>
        <Eyebrow>Contacto</Eyebrow>
        <Title>Construyamos algo inolvidable</Title>
        <Subtitle>
          Cuéntame sobre tu proyecto, equipo o idea. Respondo en menos de 24 horas con los próximos pasos y una propuesta hecha
          a tu medida.
        </Subtitle>
      </TitleGroup>
      <ContactGrid>
        <Card>
          <ChannelList>
            <Channel href="mailto:morafabricio86@gmail.com">
              <ChannelIcon>
                <FiMail />
              </ChannelIcon>
              <ChannelText>
                <ChannelTitle>Email</ChannelTitle>
                <ChannelValue>morafabricio86@gmail.com</ChannelValue>
              </ChannelText>
            </Channel>
            <Channel href="https://wa.me/50670845957" target="_blank" rel="noreferrer">
              <ChannelIcon>
                <FiPhone />
              </ChannelIcon>
              <ChannelText>
                <ChannelTitle>WhatsApp</ChannelTitle>
                <ChannelValue>+506 7084 5957</ChannelValue>
              </ChannelText>
            </Channel>
            <Channel href="https://www.google.com/maps/place/San+José,+Costa+Rica" target="_blank" rel="noreferrer">
              <ChannelIcon>
                <FiMapPin />
              </ChannelIcon>
              <ChannelText>
                <ChannelTitle>Ubicación</ChannelTitle>
                <ChannelValue>San José, Costa Rica</ChannelValue>
              </ChannelText>
            </Channel>
          </ChannelList>
        </Card>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <Label>
              Nombre completo
              <Input
                type="text"
                placeholder="Tu nombre"
                {...register('name', {
                  required: 'Por favor, cuéntame quién eres',
                  minLength: { value: 2, message: 'El nombre es muy corto' },
                })}
              />
              {errors.name && <Error>{errors.name.message}</Error>}
            </Label>
            <Label>
              Email
              <Input
                type="email"
                placeholder="nombre@empresa.com"
                {...register('email', {
                  required: 'Necesito un email para responderte',
                  pattern: {
                    value: /[^\s@]+@[^\s@]+\.[^\s@]+/,
                    message: 'Ingresa un email válido',
                  },
                })}
              />
              {errors.email && <Error>{errors.email.message}</Error>}
            </Label>
          </FieldGroup>
          <Label>
            Mensaje
            <TextArea
              placeholder="Descríbeme qué necesitas, plazos, presupuesto o cualquier idea que quieras explorar"
              {...register('message', {
                required: 'Cuéntame un poco sobre tu proyecto',
                minLength: { value: 10, message: 'Dame algunos detalles adicionales' },
              })}
            />
            {errors.message && <Error>{errors.message.message}</Error>}
          </Label>
          <Submit type="submit" disabled={isSubmitting}>
            <FiSend /> {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
          </Submit>
        </Form>
      </ContactGrid>
      <ToastContainer theme="dark" />
    </Section>
  );
};

export default Contacts;
