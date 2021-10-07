import styles from "./statistic.module.css"

export function Statistics({
  goodValue,
  neutralValue,
  badValue,
  total,
  positivePercentage,
}) {
  return (
    <>
      <ul className={styles.statisticsList}>
        <li className={styles.statisticsItem}>
          <span className={styles.text}>Good: {goodValue}</span>
        </li>
        <li className={styles.statisticsItem}>
          <span className={styles.text}>Neutral: {neutralValue}</span>
        </li>
        <li className={styles.statisticsItem}>
          <span className={styles.text}>Bad: {badValue}</span>
        </li>

        <li className={styles.statisticsItem}>
          <span className={styles.text}>Total: {total}</span>
        </li>
        <li className={styles.statisticsItem}>
          <span className={styles.text}>Positive feedback: {positivePercentage}%</span>
        </li>
      </ul>
    </>
  );
}
