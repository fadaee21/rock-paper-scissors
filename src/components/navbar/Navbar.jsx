import React from 'react'
import { useGlobalContext } from '../../context/context'
import styles from './navbar.module.css'
export const Navbar = () => {

  const { point } = useGlobalContext()

  return (
    <header className={styles.nav}>
      <ul className={styles.title} >
        <li>rock</li>
        <li>paper</li>
        <li>scissors</li>
      </ul>
      <ul className={styles.score}>
        <li>score</li>
        <li>{point}</li>
      </ul>
    </header>
  )
}
