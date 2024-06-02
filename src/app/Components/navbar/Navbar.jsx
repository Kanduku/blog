import React from 'react'
import styles from "./navebar.module.css";
import Image from 'next/image';
import Themetoggle from '../themetoggle/Themetoggle';
import AuthLinks from '../authlinks/AuthLinks';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.container}>
    
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24}/>
        <Image src="/instagram.png" alt="instagram" width={24} height={24}/>
         <Image src="/youtube.png" alt="youtube" width={24} height={24}/>
      </div>
      <div className={styles.logo}>lamblog</div>
     
      
      <div className={styles.links}>
      <Themetoggle />
        <Link href="./" className={styles.link}>home</Link>
        <Link href="./" className={styles.link}>contact</Link>
        <Link href="./" className={styles.link}>about</Link>
        <AuthLinks />
      </div>
  

    </div>
  )
}

export default Navbar
