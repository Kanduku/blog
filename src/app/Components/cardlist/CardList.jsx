import React from 'react'
import styles from "./cardlist.module.css";
import Pagnation from '../pagnation/Pagnation';

const CardList = () => {
  return (
    <div className={styles.container}>
     card List
     <Pagnation />

    </div>
  )
}

export default CardList
