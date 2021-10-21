import { Container, Grid, Icon, Segment } from "semantic-ui-react";
import contactsData from "../data/contacts.json";

function FooterContainer() {
  const { email, github, linkedin } = contactsData;

  return (
    <Container fluid>
      <Segment basic inverted>
        <Grid columns={2}>
          <Grid.Column width={3}>
            <a target="_blank" href={github}>
              <Icon name='github' size='large' />
            </a>
            <a target="_blank" href={linkedin}>
              <Icon name='linkedin' size='large' />
            </a>
            <a target="_blank" href={email}>
              <Icon name='mail' size='large' />
            </a>
          </Grid.Column>
          <Grid.Column width={10} textAlign='center'>
            Created by Kevin
          </Grid.Column>
          <Grid.Column width={3} />
        </Grid>
      </Segment>
    </Container >
  );
}

export default FooterContainer;