import ExperienceCSS from "../pages-style/Experience.module.css";
import MyWork1 from "../work1.png";
import MyWork2 from "../work3.png";

function Experience() {
  return (
    <>
      <div className={ExperienceCSS.experienceContainer}>
        <h2>Things I've Built</h2>
        <div className={ExperienceCSS.inner}>
          <div className={ExperienceCSS.work1}>
            <div className={ExperienceCSS.WorkImages}>
              <img src={MyWork1} alt="Easy Farming Login Page" />
            </div>
            <div className={ExperienceCSS.WorkContent}>
              <p>Featured Project</p>
              <h3>EasyFarming Dashboard</h3>
              <p>A Dashboard for An Online Agricultural Machinary Hiring App</p>
            </div>
          </div>
          <div className={ExperienceCSS.work2}>
            <div className={ExperienceCSS.WorkContent}>
              <p>Featured Project</p>
              <h3>SICCO Profile</h3>
              <p>Profile Page for a Swedish Company called SICCO. This was my first ever functional full stake page using VueJS Vuetify NodeJS and MongoDB</p>
            </div>
            <div className={ExperienceCSS.WorkImages}>
              <img src={MyWork2} alt="Easy Farming Login Page" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Experience;
