import "./Main.scss";
import { icons } from "./mainConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="main-module">
      <div className="wrapper">
        <div className="hello-section">
          <div className="text-wrapper">
            <h3>hey, I'm <span className="name">Eryk</span></h3>
            <h1>web developer</h1>
            <h2>W</h2>
            <p>Tasting the joy of JavaScript and cooking in every byte&bite. <span className="contact"><a href="mailto:szczepanekeryk@gmail.com">Contact me!</a></span></p>
          </div>
        </div>
        <div className="btns-section">
          <h2>lets_meet;</h2>
          <div className="btns">
            <button className="primary"><FontAwesomeIcon icon={faDownload} /> <a href="eryk_szczepanek_cv.pdf" download>Download CV</a></button>
            <button className="secondary" onClick={() => navigate('/projects')}>See Projects</button>
          </div>
          <div className="icons-wrapper">
            {icons.map((icon) => (
              <a key={icon.id} className={`icon-${icon.id}`} target="_blank" rel="noreferrer" href={icon.href}>{icon.content}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
