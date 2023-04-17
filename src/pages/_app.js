import '../styles/globals.css';
import Link from 'next/link';
import NavbarStyles from '../styles/Navbar.module.css';
import { useRouter } from 'next/router';
import HeroStyles from '../styles/Hero.module.css';
import FooterStyles from '../styles/Footer.module.css';

import Modal from '../components/Modal';
export default function App({ Component, pageProps }) {
  const router = useRouter();
  //console.log(router.pathname);

   function getLinkClassName(path){
    if(router.pathname === path){
      return NavbarStyles.linkActive;
    }
    else{
      return NavbarStyles.linkInactive;
    }
   }
   
    const homeClassName = getLinkClassName('/');
    const aboutClassName = getLinkClassName('/about');
    const productsClassName = getLinkClassName('/products');
   

  return (
    <>
    <nav className={NavbarStyles.navbar}>
      <ul> 
        <li>
          <Link className={homeClassName} href='/'>Home</Link>
        </li>
        <li>
          <Link className={aboutClassName} href='/about'>About</Link>
        </li>
        <li>
          <Link  href='/products' className={productsClassName}>Products</Link>
        </li>
      </ul>
      <span className={NavbarStyles.logo}>The Soap Factory</span>
    </nav>
    
    <header className={HeroStyles.hero}></header>
  
    <Component {...pageProps} />

    <footer className={FooterStyles.footer}>
      <div>

        <Modal trigger=' ©The Soap Factory'>
         Developed by Diamond Guzman for the people of IUPUI and to be utilized correctly for project purposes only in 2023.
        </Modal>
        
      </div>

      <div>
       
        <Modal trigger='Terms and Conditions'>
          Long List of terms and Conditions
        </Modal>

      </div>
    </footer>
  </>
  );
  
}
