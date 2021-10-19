import { Button, Container, Header } from "semantic-ui-react";

function Headline() {
  return (
    <Container text>
      <Header
        as='h1'
        style={{
          fontSize: '4em',
          marginTop: '3em',
        }}
        inverted
      >
        Hi, I'm Kevin Lau
      </Header>
      <Header
        as='h2'
        style={{ fontSize: '1.5em' }}
        inverted
      >
        Software Development Engineer
      </Header>
      <Button
        size='large'
        as='a'
        href='#projects'
      >
        View my work
      </Button>
      <Button
        size='large'
        as='a'
        href='#contacts'
      >
        Contact me
      </Button>
    </Container >
  );
}

export default Headline;