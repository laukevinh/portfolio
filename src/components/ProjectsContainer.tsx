import { Container } from "semantic-ui-react";
// import catoptImg from "../assets/catalog-optimization.png";
// import fantalytixImg from "../assets/fantalytix.png";
// import findbImg from "../assets/findb.png";
// import fitjImg from "../assets/fitj.png";
// import splendorImg from "../assets/splendor-react.png";
import projectData from "../data/projects.json";
import Project from "./Project";

function ProjectsContainer() {
  const data = projectData;
  let imgDict: { [title: string]: string } = {
    // "Catalog optimization": catoptImg,
    // "FinDB": findbImg,
    // "Splendor emulator": splendorImg,
    // "Fantalytix": fantalytixImg,
    // "Fit-j": fitjImg,
    "Catalog optimization": "",
    "FinDB": "",
    "Splendor emulator": "",
    "Fantalytix": "",
    "Fit-j": "",
  };

  return (
    <Container id='projects' fluid>
      {data.map(({ title, description, url }, index) => {
        return (
          <Project
            title={title}
            description={description}
            url={url}
            img={imgDict[title]}
            inverted={index % 2 === 1}
          />
        );
      })}
    </Container >
  );
}

export default ProjectsContainer;