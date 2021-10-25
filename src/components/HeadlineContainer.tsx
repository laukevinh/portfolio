import { ReactNode } from "react";
import { Container, Header, Segment } from "semantic-ui-react";

interface IProps {
  title: string;
  description?: string;
  inverted?: boolean;
  children?: ReactNode;
}

function HeadlineContainer(props: IProps) {
  const { title, description, inverted, children } = props;

  return (
    <Segment
      inverted={inverted === undefined || inverted === true}
      textAlign='center'
      style={{
        minHeight: 800,
        padding: '1em 0em'
      }}
      vertical
    >
      <Container text>
        <Header
          as='h1'
          style={{
            fontSize: '4em',
            marginTop: '3em',
          }}
          inverted={inverted === undefined || inverted === true}
        >
          {title}
        </Header>
        <Header
          as='h2'
          style={{ fontSize: '1.5em' }}
          inverted={inverted === undefined || inverted === true}
        >
          {description}
        </Header>
        {children}
      </Container >
    </Segment>
  );
}

export default HeadlineContainer;