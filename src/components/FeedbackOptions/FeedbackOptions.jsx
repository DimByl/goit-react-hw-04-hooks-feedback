import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.scss"

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={styles.feedbackBtnWrapper}>
    {options.map((option) => (
      <button
        className={styles.feedbackBtn}
        key={option}
        onClick={() => onLeaveFeedback(`${option}`)}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;