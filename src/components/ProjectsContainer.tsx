import { Container, Grid } from "semantic-ui-react";
import fantalytixImg from "../assets/fantalytix.png";
import findbImg from "../assets/findb.png";
import fitjImg from "../assets/fitj.png";
import splendorImg from "../assets/splendor-react.png";
import projectData from "../data/projects.json";
import Project from "./Project";

function ProjectsContainer() {
  const data = projectData;
  let imgDict: { [title: string]: string } = {
    "FinDB": findbImg,
    "Splendor emulator": splendorImg,
    "Fantalytix": fantalytixImg,
    "Fit-j": fitjImg,
  };

  return (
    <Container id='projects'>
      <Grid style={{ minHeight: 800 }}>
        {data.map(({ title, description, url }) => {
          return (
            <Project
              title={title}
              description={description}
              url={url}
              img={imgDict[title]}
            />
          );
        })}
      </Grid>
    </Container >
  );
}

export default ProjectsContainer;