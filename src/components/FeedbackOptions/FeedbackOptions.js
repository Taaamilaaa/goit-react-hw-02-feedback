import styles from './feedbackOptions.module.css'

export function FeedbackOptions({ options, onLeaveFeedback }) {
    let el = -1;
  return (
    <ul className={styles.feedbackList}>
          {options.map((option) => {            
        return (
          <li className={styles.feedbackItem} key={option}>
            <button className={styles.button} onClick={onLeaveFeedback[el += 1]}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}