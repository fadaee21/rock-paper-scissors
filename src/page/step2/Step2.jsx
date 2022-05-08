import React, { useCallback, useEffect, useState } from 'react'
import scissors from '../../assets/images/icon-scissors.svg'
import rock from '../../assets/images/icon-rock.svg'
import paper from '../../assets/images/icon-paper.svg'
import { useGlobalContext } from '../../context/context'
import styles from './step2.module.css'
import { useNavigate } from 'react-router-dom'
export const Step2 = () => {

  const { user, computer, win } = useGlobalContext()
  const [userImage, setUserImage] = useState("")
  const [computerImage, setComputerImage] = useState("")
  const navigate = useNavigate()

  const userImageCalc = useCallback(
    () => {
      switch (user) {
        case "paper":
          setUserImage(paper);
          break;
        case "rock":
          setUserImage(rock);
          break;
        case "scissors":
          setUserImage(scissors);
          break;
        default:
          break;
      }
    },
    [user]
  )

  const computerImageCalc = useCallback(
    () => {
      switch (computer) {
        case "paper":
          setComputerImage(paper);
          break;
        case "rock":
          setComputerImage(rock);
          break;
        case "scissors":
          setComputerImage(scissors);
          break;
        default:
          break;
      }
    },
    [computer]
  )


  useEffect(() => {
    userImageCalc()
    computerImageCalc()
  }, [userImageCalc, computerImageCalc])

  return (
    <div className={styles.result}>
      <div className={[styles.user,
      (win === 1 ? styles.winnerHeart : [])].join(" ")}>
        <p>you picked</p>
        <div className={[styles.selected,
        ((user === "scissors")
          ? styles.scissors
          : ((user === "paper")
            ? styles.paper : styles.rock))].join(' ')} >
          <img src={userImage} alt="user choice" />
        </div>
      </div>
      <div className={styles.state} >
        <p>{win === 1 ? "you win"
          : (win === -1 ? "you lose" : "equal")
        }</p>
        <button onClick={() => navigate("/")}>play again</button>
      </div>
      <div className={[styles.computer,
      (win === -1 ? styles.winnerHeart : [])].join(" ")}>
        <p>the house picked</p>
        <div className={[styles.selected,
        ((computer === "scissors")
          ? styles.scissors
          : ((computer === "paper")
            ? styles.paper : styles.rock))].join(' ')} >
          <img src={computerImage} alt="computer choice" />
        </div>
      </div>
    </div>
  )
}
