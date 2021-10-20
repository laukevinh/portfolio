import { Segment } from "semantic-ui-react";
import Headline from "./Headline";

function HeadlineContainer() {
  return (
    <Segment
      inverted
      textAlign='center'
      style={{
        minHeight: 800,
        padding: '1em 0em'
      }}
      vertical
    >
      <Headline />
    </Segment>
  );
}

export default HeadlineContainer;