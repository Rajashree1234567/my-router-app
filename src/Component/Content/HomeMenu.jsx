import styled from './content.module.css';
import homeTop from '../../assets/home-top.jpg';
import downloadimage from '../../assets/downloadimage.webp';
import homeleft from '../../assets/home-left.jpg';

export const HomeMenu = () => {
  return (
    <div className={styled.content}>
        <div className={styled.oddSubContent}>
            <div>
                <img src={homeTop} className={styled.imageSize} alt='downloadmage' />
            </div>
            <div>
                <h3>Download Now</h3>
                <h5>Lorem Ipsum</h5>
                <button className={styled.btnDownload}>
                    <img className={styled.iconSize} src={downloadimage} alt='D' />
                    <span>Download now</span>
                </button>
            </div>
        </div>
        <div className={styled.evenSubContent}>
            <div>
                <img src={homeleft} className={styled.centerContent} alt='downloadmage' />
            </div>
        </div>
    </div>
  )
}
