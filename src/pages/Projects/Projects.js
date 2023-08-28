import "./Projects.scss";
import { projectItems } from "./projectsConfig";
import SingleProject from "./SingleProject"

const Projects = () => {
  return (
    <div className="projects-module">
      <h1>projects;</h1>
      <div className="wrapper">
        {projectItems.map(item => <SingleProject project={item} key={`projects-${item.id}`}/>)}
      </div>
    </div>
  )
};

export default Projects;