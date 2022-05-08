import React, { useState } from 'react'
import { Modal } from '../../components/Modal.jsx/Modal'
import styles from './rules.module.css'

export const Rules = () => {

  const [modal, setModal] = useState(false)

  return (
    <>
      <div onClick={() => setModal(true)} className={styles.rulesButton} >
        rules
      </div>
      <Modal modal={modal} setModal={setModal} />
    </>
  )
}
