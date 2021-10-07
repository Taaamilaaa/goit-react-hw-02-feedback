import styles from "./notification.module.css"

export function Notification({ massage }) {
    return (
        <p className={styles.notification}>{ massage}</p>
    )
}