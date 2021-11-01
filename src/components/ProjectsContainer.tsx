import { Container } from "semantic-ui-react";
import catoptImg from "../../public/assets/catalog-optimization.png";
import fantalytixImg from "../../public/assets/fantalytix.png";
import findbImg from "../../public/assets/findb.png";
import fitjImg from "../../public/assets/fitj.png";
import splendorImg from "../../public/assets/splendor-react.png";
import projectData from "../data/projects.json";
import Project from "./Project";

function ProjectsContainer() {
  const data = projectData;
  let imgDict: { [title: string]: any } = {
    "Catalog optimization": catoptImg,
    "FinDB": findbImg,
    "Splendor emulator": splendorImg,
    "Fantalytix": fantalytixImg,
    "Fit-j": fitjImg,
  };

  return (
    <Container id='projects' fluid>
      {data.map(({ title, description, url }, index) => {
        const img = imgDict[title];
        return (
          <Project
            title={title}
            description={description}
            url={url}
            img={img.src}
            inverted={index % 2 === 1}
          />
        );
      })}
    </Container >
  );
}

export default ProjectsContainer;