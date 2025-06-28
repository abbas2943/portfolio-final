// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import leftNavCSS from '../components-style/LeftNav.module.css';
function LeftNav() {
  return (
    <>
    <div className={leftNavCSS.leftNav}>
      <ul>
        <li>
          <a href="https://github.com/abbas2943" target="_blank" rel="noopener noreferrer" ><i loading="lazy" className="fa-brands fa-github"></i></a>
        </li>
        <li>
          <a href="https://instagram.com/abace_aley/" target='_blank' rel="noopener noreferrer" ><i loading="lazy" className="fa-brands fa-instagram"></i></a>
        </li>
        <li>
          <a href="https://www.twitter.com/abbasalilkhan29" target="_blank" rel="noopener noreferrer" ><i loading="lazy" className="fa-brands fa-twitter"></i></a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/abbasalikhan29/' target="_blank" rel="noopener noreferrer" ><i loading="lazy" className="fa-brands fa-linkedin-in"></i></a>
        </li>
        <li>
          <a href='#'><i loading="lazy" className="fa-brands fa-codepen"></i></a>
        </li>
        <div className={leftNavCSS.vr}/>
      </ul>
    </div>
    </>
  );
}
export default LeftNav;
