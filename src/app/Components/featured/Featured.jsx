import React from 'react'
import styles from "./featured.module.css";
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
     <h1 className={styles.title} >
      <b >Hey ,i am here</b> Discover stories and ideas.
     </h1>
     <div className={styles.post}>
     <div className={styles.imageContainer}>
      <Image src="/p1.jpeg" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.postTitle}>Journey Through My Everyday Adventures</h2>
        <p className={styles.postDesc}>Join me as I navigate the ups and downs of life, sharing personal stories, insights, and reflections. From travel escapades to daily musings, this blog is a glimpse into my world and the lessons I learn along the way.</p>
        <button className={styles.button}>read more</button>
      </div>


     </div>

    </div>
  )
}

export default Featured
