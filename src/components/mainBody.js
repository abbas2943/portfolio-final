import mainBodyCSS from "../components-style/mainBody.module.css";
import MyFooter from "./Footer";
import About from "../Pages/About";
import Work from "../Pages/Works";
import ContactPage from "../Pages/Contact";
import ExperiencePage from "../Pages/Experience";

function mainBody() {
  return (
    <>
      <div className={mainBodyCSS.main__body}>
        <div className={mainBodyCSS.greeting__portion}>
          <div className={mainBodyCSS.greeting}>Hi, My Name is</div>
          <div className={mainBodyCSS.my__name}>Abbas Ali Khan.</div>
          <div className={mainBodyCSS.my__role}>
            I build Websites <br />
          </div>
          <p className={mainBodyCSS.my__intro}>
            I’m a Computer Science graduate specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I’m focused in learning on how to build fullstake, creative,
            innovative and interactive, Websites from scratch to increase
            customer interactions at{" "}
            <a href="https://softqor.com"> SOFTQOR [SMC Private Limited].</a>
          </p>
          <p className={mainBodyCSS.my__hobby}>
            I am also in love with photography and travelling as my hobby, apart
            from web development. I have started a youtube channel where I post
            videos of my travels and mountains & landscapes sceneries. You can show your
            support by subscribing to my channel
          </p>
        
        </div>
        <div className={mainBodyCSS.course__btn}>
          
          <p> <a href="https://www.youtube.com/@the-kawishgar" target="_blank" rel="noreferrer">Support me on Youtube!</a></p>
        </div>
        <div className={mainBodyCSS.page__body}>
          <section id="About">
            <About />
          </section>
          <section id="Work">
            <Work />
          </section>
          <section id="Experience">
            <ExperiencePage />
          </section>
          <section id="Contact">
            <ContactPage />
          </section>
        </div>
        <footer>
          <MyFooter />
        </footer>
      </div>
    </>
  );
}

export default mainBody;
