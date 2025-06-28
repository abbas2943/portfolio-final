import AboutCSS from "../pages-style/About.module.css";
import myPicture from "../me.png";

function About() {
  return (
    <>
      <div className={AboutCSS.mainContainer}>
        <h2 className={AboutCSS.numbered_heading}>About Me</h2>
        <div className={AboutCSS.hrLine}></div>
        {/* <div className={AboutCSS.contentContainer}> */}
        <div className={AboutCSS.contents}>
          <div className={AboutCSS.otherContents}>
            <p>
              Hello! My name is Abbas Ali and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2021 when I was in 7th Semester of my Bachelors of Science (BS)
              degree and had to start my Final Year Project (FYP). Developing an
              Admin Panel along with some other required pages like; Home Page,
              Sign-In, Sign-Up pages and others, not only tought me a lot about
              technologies like HTML, CSS, JS and Bootstrap etc. but also gave
              me the knowledge of how Web Apps are created/developed!
            </p>
            {/* <p>
              Fast-forward to today, and I’ve had the privilege of working at a
              start-up and as student-lead project. My main focus these days is
              building full stake websites using JavaScript frameworks like
              React JS and Vue JS for frontend, Node JS for backend and MongoDB
              for database. Beside this I am also taking IT Security Course from{" "}
              <a
                href="https://www.coursera.org"
                target="_blank"
                rel="noreferrer"
              >
                Coursera
              </a>{" "}
            </p> */}
            <p>Here are a few technologies I’ve been working with recently:</p>
            <div className={AboutCSS.technoList}>
              <ul className={AboutCSS.skills__list}>
                <li> HTML</li>
                <li> CSS</li>
                <li> JavaScript</li>
                <li> React.JS</li>
                <li> Bootstrap</li>
                <li> Vue js</li>
                <li> Vuetify</li>
                {/* <li> Node.js</li> */}
              </ul>
            </div>
            {/* <p>I also have some knowledge of buliding Websites` frontend using WordPress and elementor</p> */}
          </div>
          <div className={AboutCSS.image}>
            <div className={AboutCSS.imageBorder}>
              <img loading="lazy" src={myPicture} alt="Abbas Ali" />
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
export default About;
