import React from 'react'
import styles from './modal.module.css'
import imageRules from '../../assets/images/image-rules.svg'
import iconClose from '../../assets/images/icon-close.svg'
export const Modal = ({ modal, setModal }) => {
    return (
        <section className={[styles.rulesContent, (modal ? styles.show : [])].join(" ")} >
            <div className={styles.rules} >
                <div className={styles.iconClose}>
                    <p>rules</p>
                    <img onClick={() => setModal(false)} src={iconClose} alt="" />
                </div>
                <img className={styles.ImageRules} src={imageRules} alt="" />
            </div>
        </section>
    )
}