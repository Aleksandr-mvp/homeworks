import React from 'react'
import styles from './Message.module.css'

type propsType = {
    avatar?: string
    name: string
    message: string
    time: string
}

function Message(props: propsType) {
    return (
        <div className={styles.message}>
            <div className={styles.ava}>
                <img src={props.avatar} alt="ava"/>
            </div>
            <div className={styles.content}>
                <div className={styles.name}>
                    {props.name}
                </div>
                <div className={styles.text}>
                    {props.message} <span className={styles.time}>{props.time}</span>
                </div>
            </div>
        </div>
    )
}

export default Message
