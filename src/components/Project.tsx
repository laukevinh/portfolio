import { Button, Container, Grid, Header, Image, Segment } from "semantic-ui-react";

interface ProjectProps {
  title: string;
  description: string;
  url: string;
  img: string;
  inverted: true | false;
}

function Project(props: ProjectProps) {
  const { title, description, url, img, inverted } = props;

  const textGridColumn = (
    <Grid.Column width={8}>
      <Header
        as='h1'
        style={{
          fontSize: '4em',
          marginTop: '3em',
        }}
        inverted={inverted}
      >
        {title}
      </Header>
      <Header
        as='h2'
        style={{ fontSize: '1.5em' }}
        inverted={inverted}
      >
        {description}
      </Header>
      <Button
        as='a'
        target='_blank'
        href={url}
        inverted={inverted}
      >
        Visit
      </Button>
    </Grid.Column>
  );

  const imgGridColumn = (
    <Grid.Column width={8}>
      <Image src={img} alt={title + " img"} />
    </Grid.Column>
  );

  const gridColumns = [textGridColumn, imgGridColumn];

  return (
    <Segment
      basic
      inverted={inverted}
      color={inverted ? "blue" : undefined}
      style={{ paddingBottom: 200 }}
    >
      <Container>
        <Grid>
          {inverted ? gridColumns.reverse() : gridColumns}
        </Grid>
      </Container>
    </Segment>
  );
}

export default Project;