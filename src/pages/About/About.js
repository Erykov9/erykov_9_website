import "./About.scss";
import { icons } from "./aboutConfig";

const About = () => {
  return (
    <div className="about-module">
      <h1>about_me;</h1>
      <p>
        Hello there! My name is <span>Eryk</span>, and I was born in nineties. I
        became interested in JavaScript programming back in 2020, and my formal
        learning journey began at the end of that year.
        <br />
        <br />
        In 2023, I successfully completed an intensive bootcamp, which provided
        me with a deep understanding of programming. As a full-stack JavaScript
        developer, I primarily work with ReactJS, Node.js, Express.js, and
        databases like MongoDB and MySQL.
        <br />
        <br />I find great joy in leveraging these technologies to create
        innovative and efficient solutions. Aside from coding, I have other
        passions too. I love cooking and experimenting with various flavors in
        the kitchen. Additionally, I'm fascinated by arm wrestling, which helps
        me strike a balance between work and physical activity.
        <br />
        <br /> I'm diligent and hardworking, dedicating most of my free time to
        learning and honing my programming skills. I constantly strive for
        self-improvement and challenge myself to become a better developer.
        <br />
        <br />
        Thank you for visiting my website. Feel free to explore my projects, and
        I'm open to exciting collaboration opportunities!
      </p>
      <h1>work;</h1>
      <p>
        I am open to collaboration opportunities as well as full-time job
        offers.
        <br /> At present, the most suitable form of employment for me would be
        a full-time employment contract. However, in the future, I am
        considering establishing a sole proprietorship.
        <br /> Currently, I am working part-time for a company that specializes
        in creating websites, including online stores, reservation websites,
        administrative panels, and much more.

        <br /> My passion lies in frontend development; that's where I feel most
        comfortable. Nevertheless, I am also capable as a full-stack developer,
        although backend work isn't among my favorite tasks.
      </p>
      <br />
      <br />
      <h1>stack_&_tools;</h1>
      <div className="icons">
        {icons.map((icon) => (
          <>{icon.content}</>
        ))}
      </div>
      <p>
        The above tech stack presents only the tools and frameworks I use most
        frequently. Throughout my career, I have used many other things. Additionally, I would like to explore further tools in the near future that will help me become a better programmer.
      </p>
    </div>
  );
};

export default About;
