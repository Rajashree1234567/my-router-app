import styled from './footer.module.css';

const Footer = () => {

    const footerMenu = [
        {contact: 'contact us'},
        {contact: '7008545452'},
        {contact: 'Also you can reach out'},
        {contact: 'raj@gmail.com'},
        {contact: 'ready to help'},
    ]
  return (
    <div className={styled.footer}>
        <div className={styled.footerMenu}>
            {footerMenu.map((fMEnu)=>{
                return(
                    <div key={fMEnu.contact}>
                        {fMEnu.contact}
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Footer;