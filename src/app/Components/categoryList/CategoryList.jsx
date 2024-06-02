import React from 'react'
import styles from "./categorylist.module.css";
import Link from 'next/link';
import Image from 'next/image';

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}><b>Category list </b></div>
      <div className={styles.categories} >
   
      <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`} >
      <Image src="/style.png" alt="" width={32} height={32} className={styles.image}/>
      style
      </Link>
      <Link href="/blog?cat=style" className={`${styles.category} ${styles.fashion}`} >
      <Image src="/fashion.png" alt="" width={32} height={32} className={styles.image}/>
     fashion
      </Link>
      <Link href="/blog?cat=style" className={`${styles.category} ${styles.food}`} >
      <Image src="/food.png" alt="" width={32} height={32} className={styles.image}/>
      food
      </Link>
      <Link href="/blog?cat=style" className={`${styles.category} ${styles.travel}`} >
      <Image src="/travel.png" alt="" width={32} height={32} className={styles.image}/>
      travel
      </Link>
      <Link href="/blog?cat=style" className={`${styles.category} ${styles.culture}`} >
      <Image src="/culture.png" alt="" width={32} height={32} className={styles.image}/>
      culture
      </Link>
      <Link href="/blog?cat=style" className={`${styles.category} ${styles.coding}`} >
      <Image src="/coding.png" alt="" width={32} height={32} className={styles.image}/>
      coding
      </Link>
      </div>
      </div>

   
  )
}

export default CategoryList
