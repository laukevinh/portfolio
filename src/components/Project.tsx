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
  const spacing = 200;

  const textGridColumn = (
    <Grid.Column width={8}>
      <Header
        as='h1'
        style={{
          fontSize: '4em',
          marginTop: spacing,
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
        disabled={url === ""}
      >
        Visit
      </Button>
    </Grid.Column>
  );

  const imgGridColumn = (
    <Grid.Column floated={inverted ? 'left' : 'right'} width={6}>
      <Image
        bordered
        rounded
        size='large'
        src={img}
        alt={title + " img"}
        style={{ marginTop: spacing }}
      />
    </Grid.Column>
  );

  const gridColumns = [textGridColumn, imgGridColumn];

  return (
    <Segment
      basic
      inverted={inverted}
      color={inverted ? "blue" : undefined}
      style={{ paddingBottom: spacing }}
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