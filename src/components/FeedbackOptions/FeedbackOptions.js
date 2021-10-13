import PropTypes from 'prop-types'; // ES6


import styles from './feedbackOptions.module.css'

export function FeedbackOptions({ options, onLeaveFeedback }) {
    let el = -1;
  return (
    <ul className={styles.feedbackList}>
          {options.map((option) => {            
        return (
          <li className={styles.feedbackItem} >
            <button className={styles.button} key={option} type="button" onClick={onLeaveFeedback(options)}>
                     {/* {option.charAt(0).toUpperCase() + option.slice(1)} */}

            </button>
          </li>
        );
      })}
    </ul>
  );
}

 

FeedbackOptions.protoTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.array,
}