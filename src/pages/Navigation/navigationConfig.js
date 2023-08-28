import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMessage, faDesktop, faQuestion } from "@fortawesome/free-solid-svg-icons"

export const navItems = [
  {
    id: 1,
    content: "home",
    icon: <FontAwesomeIcon icon={faHouse}/>,
    href: "/"
  },
  {
    id: 2,
    content: "contact",
    icon: <FontAwesomeIcon icon={faMessage} />,
    href: "/contact"
  },
  {
    id: 3,
    content: "projects",
    icon: <FontAwesomeIcon icon={faDesktop} />,
    href: "/projects"
  },
  {
    id: 4,
    content: "about",
    icon: <FontAwesomeIcon icon={faQuestion} />,
    href: "/about"
  }
]