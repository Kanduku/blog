"use client"
import React, { useState } from 'react'
import styles from "./authlinks.module.css";
import Link from 'next/link';

const AuthLinks = () => {

  const [open ,setOpen] =useState(false)
  const status ="notauthonticated";
  return (
    <>
    {status == "notauthonticated" ? (
      <Link href="./login" className={styles.link}>Login</Link>

    ):
    (<>
    <Link href="./write" className={styles.link}>write</Link>
    <span className={styles.link}> logout</span>
    </>

    )}
    <div className={styles.burger} onClick={() =>setOpen(!open)}>
    <div className={styles.line}></div>
    <div className={styles.line}></div>
    <div className={styles.line}></div>
    </div>
    {open && ( 
    <div className={styles.responsiveMenu}>

       <Link href="./" >home</Link>
       <Link href="./" >contact</Link>
       <Link href="./" >about</Link>
       {status === "notauthonticated" ? (
        <Link href="./login">Login</Link>
        ) : (
        <>
    <Link href="./write">write</Link>
    <span className={styles.link}> logout</span>
    </>
        )

       }
       </div>
    )}

    </>
  );
};

export default AuthLinks
