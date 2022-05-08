import React from 'react'
import triangle from '../../assets/images/bg-triangle.svg'
import scissors from '../../assets/images/icon-scissors.svg'
import rock from '../../assets/images/icon-rock.svg'
import paper from '../../assets/images/icon-paper.svg'

import styles from './step1.module.css'
import { useGlobalContext } from '../../context/context'
import { Link } from 'react-router-dom'

export const Step1 = () => {

  const { user, computer, challengeHandle } = useGlobalContext()




  console.log("user:", user, "computer:", computer)



  return (
    <div className={styles.step1} >
      <img className={styles.triangle} src={triangle} alt="triangle" />
      <ul className={styles.tools}>
        <Link to="/result"><li onClick={() => challengeHandle("paper")} className={styles.paper} >
          <img src={paper} alt="paper" />
        </li></Link>
        <Link to="/result"><li onClick={() => challengeHandle("scissors")} className={styles.scissors} >
          <img src={scissors} alt="scissors" />
        </li></Link>
        <Link to="/result"><li onClick={() => challengeHandle("rock")} className={styles.rock} >
          <img src={rock} alt="rock" />
        </li></Link>
      </ul>
    </div>
  )
}
