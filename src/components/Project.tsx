import { Button, Grid, Header, Image } from "semantic-ui-react";

interface ProjectProps {
  title: string;
  description: string;
  url: string;
  img: string;
}

function Project(props: ProjectProps) {
  const { title, description, url, img } = props;

  return (
    <>
      <Grid.Column width={12}>
        <Header
          as='h1'
          style={{
            fontSize: '4em',
            marginTop: '3em',
          }}
        >
          {title}
        </Header>
        <Header
          as='h2'
          style={{ fontSize: '1.5em' }}
        >
          {description}
        </Header>
        <Button
          as='a'
          target='_blank'
          href={url}
        >
          Visit
        </Button>
      </Grid.Column>
      <Grid.Column width={4}>
        <Image src={img} alt={title + " img"} />
      </Grid.Column>
    </>
  );
}

export default Project;