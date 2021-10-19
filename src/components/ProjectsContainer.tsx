import { Container, Grid } from "semantic-ui-react";
import Project from "./Project";

function ProjectsContainer() {
  return (
    <Container id='projects'>
      <Grid style={{ minHeight: 800 }}>
        <Project
          title='FinDB'
          description='Description'
          url=''
        />
      </Grid>
    </Container >
  );
}

export default ProjectsContainer;