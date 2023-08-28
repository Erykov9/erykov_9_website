import "./Contact.scss";

const SingleContact = ({ item }) => {
  return (
    <div className="icon-item" key={item.text}>
      <a href={item.href} target="_blank" rel="noreferrer">
        <span className="icon">{item.icon} </span>
        <div className="hidden">
          <span className="text">{item.text}</span>
          <br />
          <span className="content">{item.content}</span>
        </div>
      </a>
    </div>
  );
};

export default SingleContact;
