import { Button, Container, Grid, Header, Image } from "semantic-ui-react";

function ContactsContainer() {
  return (
    <Container id='contacts'>
      <Grid style={{ minHeight: 800 }}>
        <Grid.Column width={12}>
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
            <a href='mailto: laukevinh@gmail.com'>laukevinh@gmail.com</a>
          </Header>
          <Button as='a' target='_blank' href='https://github.com/laukevinh'>Github</Button>
          <Button as='a' target='_blank' href='https://www.linkedin.com/in/kalau/'>LinkedIn</Button>
        </Grid.Column>
        <Grid.Column width={4}>
          <Image>Placeholder</Image>
        </Grid.Column>
      </Grid>
    </Container >
  );
}

export default ContactsContainer;