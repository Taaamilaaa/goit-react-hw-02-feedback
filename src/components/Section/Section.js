import styles from "./section.module.css"

export function Section({ title, children }) {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </section>
    )
}