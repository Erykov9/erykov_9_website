import "./Projects.scss";

const SingleProject = ({ project }) => {
  return (
    <div className="single-project" >
      <img src={project.src} alt={project.alt} />
      <div className="hidden-content">
        <div className="hidden-info">
          <h4>{project.name}</h4>
          <div className="hidden-stack">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <p>{project.description}</p>
          <button className="primary"><a href={project.url} target="_blank" rel="noreferrer">Visit website</a></button>
          {project.github && <button className="secondary"><a href={project.github} target="_blank" rel="noreferrer">Check repository</a></button>}
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
