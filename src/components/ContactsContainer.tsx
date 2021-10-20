import { Button, Container, Header } from "semantic-ui-react";
import contactsData from "../data/contacts.json";

function ContactsContainer() {
  const { email, github, linkedin } = contactsData;

  return (
    <Container id='contacts' style={{ marginBottom: 300 }}>
      <Header
        as='h1'
        style={{
          fontSize: '4em',
          marginTop: '3em',
        }}
      >
        Contact me
      </Header>
      <Header
        as='h2'
        style={{ fontSize: '1.5em' }}
      >
        <a href={`'mailto: ${email}`}>{email}</a>
      </Header>
      <Button as='a' target='_blank' href={github}>Github</Button>
      <Button as='a' target='_blank' href={linkedin}>LinkedIn</Button>
    </Container >
  );
}

export default ContactsContainer;