import FooterCSS from "../components-style/Footer.module.css"

function MyFooter(){
    return(
     <>
     <div className={FooterCSS.socials}>
      <ul>
        <li>
          <a href="https://github.com/abbas2943" title="Github" target="_blank" rel="noopner noreferrer"><i loading="lazy" className="fa-brands fa-github"></i></a>
        </li>
        <li>
          <a href="https://instagram.com/abace_aley/" title="Instagram" target='_blank' rel="noopner noreferrer"><i loading="lazy" className="fa-brands fa-instagram"></i></a>
        </li>
        <li>
          <a href="https://www.twitter.com/abbasalilkhan29" title="Twitter" target="_blank" rel="noopener noreferrer"><i loading="lazy" className="fa-brands fa-twitter"></i></a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/abbasalikhan29/' title="LinkedIn" target="_blank" rel="noopener noreferrer"><i loading="lazy" className="fa-brands fa-linkedin-in"></i></a>
        </li>
        <div className={FooterCSS.vr}/>
      </ul>
    </div>
     <div>
        <small> &#xa9;Credit: The design is taken from the original work of <a href="https://brittanychiang.com/" target="_blank" rel="noopener noreferrer">Brittany Chiang</a> </small>
     </div>
     <div>
        
     </div>
     
     </>   
    )
}

export default MyFooter;