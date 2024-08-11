import { Body, Container, Head, Hr, Html, Preview, Section, Text } from '@react-email/components';
type Props = {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
};

const main = {
  backgroundColor: '#f4f4f7',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  color: '#333333',
  padding: '20px',
};

const container = {
  margin: '0 auto',
  padding: '20px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
};

const header = {
  borderBottom: '2px solid #eeeeee',
  paddingBottom: '10px',
  marginBottom: '20px',
};

const title = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#2a9d8f',
};

const content = {
  paddingBottom: '20px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
  color: '#333333',
  marginBottom: '20px',
};

const hr = {
  borderColor: '#eeeeee',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
};

const EmailTemplateLead = ({ email, lastname, message, name, phone }: Props) => {
  return (
    <Html>
      <Head />
      <Preview>Nuevo lead registrado en Invertifast 🎉</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={title}>🎉 Nuevo Lead Registrado 🎉</Text>
          </Section>
          <Section style={content}>
            <Text style={paragraph}>Hola equipo,</Text>
            <Text style={paragraph}>
              Se ha registrado un nuevo lead en la página de Invertifast. Aquí están los detalles:
            </Text>
            <Text style={paragraph}>
              <strong>📛 Nombre:</strong> {name} {lastname}
            </Text>
            <Text style={paragraph}>
              <strong>📧 Email:</strong> {email}
            </Text>
            <Text style={paragraph}>
              <strong>📞 Teléfono:</strong> {phone}
            </Text>
            <Text style={paragraph}>
              <strong>💬 Mensaje:</strong> {message}
            </Text>
            <Text style={paragraph}>
              Saludos,
              <br />
              El equipo de Invertifast 🚀
            </Text>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>Belmont Agency</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplateLead;
