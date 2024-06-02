"use client";

import React, { useContext } from 'react';
import styles from './themetoggle.module.css';
import Image from 'next/image';
import { ThemeContext } from '@/context/ThemeContext';

const Themetoggle = () => {
  const { toggle, theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div 
      className={styles.container} 
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "#0f172a" }
          : { backgroundColor: "white" }
      }
    >
      <Image src="/moon.png" alt="Moon icon" width={14} height={14} />
      <div 
        className={styles.ball} 
        style={
          theme === "dark"
            ? { right: 1, background: "white" }
            : { left: 1, background: "#0f172a" }
        }
      ></div>
      <Image src="/sun.png" alt="Sun icon" width={14} height={14} />
    </div>
  );
};

export default Themetoggle;
