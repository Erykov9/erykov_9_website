import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export const contactIcons = [
  {
    id: 1,
    content: "+48 698-008-803",
    icon: <FontAwesomeIcon icon={faPhone} />,
    text: "phone",
    href: "tel:+48698008803",
  },
  {
    id: 2,
    content: "erykov9dev@gmail.com",
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    text: "e-mail",
    href: "mailto:erykov9dev@gmail.com",
  },
  {
    id: 3,
    content: "LinkedIn",
    icon: <i className="devicon-linkedin-plain"></i>,
    text: "linkedin",
    href: "https://linkedin.com/in/eryk-szczepanek",
  },
];
