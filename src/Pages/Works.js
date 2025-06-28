
import { useState } from "react";
import styles from "../pages-style/Works.module.css";

const experienceData = [
  {
    company: "Softqor",
    role: "MEVN Developer Intern",
    duration: "Dec 2022 – Feb 2023",
    points: [
      "Built responsive UIs & components using VueJS, Vuetify, NodeJS, ExpressJS and MongoDB.",
      "Improved existing codebases.",
      "Used Git and GitHub for version control.",
    ],
  },
  {
    company: "Easy Farmin",
    role: "Web Developer",
    duration: "Oct 2021 – May 2022",
    points: [
      "Developed components for the dashboard and other required pages from ground up.",
      "Designed Mockups using Figma and Moqups (online web applications).",
      "Composed well-structured documentation for it, clearly outlining its design, development process, and core functionalities",
    ],
  },
];

export default function Works() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.container} id="work">
      <h2 className={styles.heading}>Where I’ve Worked</h2>
      <div className={styles.inner}>
        <div className={styles.tabList}>
          <div className={styles.tabButtonsWrapper}>
            {experienceData.map((job, index) => (
              <button
                key={job.company}
                className={`${styles.tabButton} ${
                  index === activeIndex ? styles.active : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {job.company}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.tabContent}>
          <h3>
            {experienceData[activeIndex].role}{" "}
            <span className={styles.company}>
              @ {experienceData[activeIndex].company}
            </span>
          </h3>
          <p className={styles.duration}>
            {experienceData[activeIndex].duration}
          </p>
          <ul className={styles.responsibilities}>
            {experienceData[activeIndex].points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
