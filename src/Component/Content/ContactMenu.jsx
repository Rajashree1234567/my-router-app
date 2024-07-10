import {ContactForm} from '../SubContent/ContactForm/ContactForm';
import styled from './content.module.css';
import location from '../../assets/location.jpg';
import email from '../../assets/email.jpg';
import phone from '../../assets/phone.jpg';

export const ContactMenu = () => {
  return (
    <div className={styled.content}>
      <div className={styled.contactSubContent}>
        <div className={styled.fillBox}>
          <p className={styled.textHeadingBold}>Get in touch:</p>
          <p>Fill in the form to start a conversation</p>
          <div className={styled.onlyFlexBox}>
            <img src={location} className={styled.iconSize} alt='iconGetintoch' />
            <span>Acme inc, Street, state, postcode</span>
          </div>
          <div className={styled.onlyFlexBox}>
            <img src={phone} className={styled.iconSize} alt='iconGetintoch' />
            <span>+44 1234567790</span>
          </div>
          <div className={styled.onlyFlexBox}>
            <img src={email} className={styled.iconSize} alt='iconGetintoch' />
            <span>info@acne.org</span>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
