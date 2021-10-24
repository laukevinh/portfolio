import Image from 'next/image';
import { Button, Container, Grid, Header, Segment } from "semantic-ui-react";
import styles from "../styles/styles.module.css";

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
        href={url}
        inverted={inverted}
        disabled={url === ""}
      >
        Learn more
      </Button>
    </Grid.Column>
  );

  const imgGridColumn = (
    <Grid.Column floated={inverted ? 'left' : 'right'} width={6}>
      {/* We must use Next.js Image because Semantic Image doesn't work */}
      {/* We must also wrap Image with a div to apply styling beucase nothing else works */}
      <div style={{ marginTop: spacing }}>
        <Image
          src={img}
          alt={title + " img"}
          className={`${styles.rounded} ${styles.bordered}`}
        />
      </div>
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