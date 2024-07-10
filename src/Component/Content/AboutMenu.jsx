
import styled from './content.module.css';
import aboutrighttop from '../../assets/home-right-top.png';

export const AboutMenu = () => {

  return (
    <div className={styled.content}>
        <div>
            <div className={styled.oddSubContent}>
              <img src={aboutrighttop} className={styled.imageSize} alt="aboutImage" />
              <span className={styled.textBoxSpaceAround}>
                <p className={styled.textHeadingBold}>React deveploment is carried out by passionate developers</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum esse tempore exercitationem ipsa veritatis dolorum perferendis deserunt reprehenderit rerum iusto sint, deleniti numquam, porro optio harum suscipit nobis voluptatem ducimus.</p>
              </span>
            </div>
            <div className={styled.gridContainer}>
              <p className={styled.textColoumHead}>Resource</p>
              <p className={styled.textColoumHead}>Folllow Us</p>
              <p className={styled.textColoumHead}>LEGAL</p>
              <p>home  </p>
              <p>contact</p> 
              <p>Privacy Policy</p>
              <p>about</p>             
              <p>github </p>
              <p>Term & Conditions</p>
              <p>Discord</p>             
            </div>
        </div>
    </div>
  )
}
