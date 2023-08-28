import "./Contact.scss";
import { contactIcons } from "./contactConfig";
import SingleContact from "./SingleContact";

const Contact = () => {
  return (
    <div className="contact-module">
      <h1>contact_me;</h1>
      <div className="wrapper">
        <div className="icons">
          {contactIcons.map((item) => (
            <SingleContact item={item} key={`contact-${item.id}`}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
