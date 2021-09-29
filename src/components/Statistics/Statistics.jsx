import PropTypes from "prop-types";
import styles from "./Statistics.module.scss"

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={styles.statisticsList}>
    <li className={styles.statisticsItem}>
      <span className={styles.statisticsText}>Good: </span>
      {good}
    </li>
    <li className={styles.statisticsItem}>
      <span className={styles.statisticsText}>Neutral: </span>
      {neutral}
    </li>
    <li className={styles.statisticsItem}>
      <span className={styles.statisticsText}>Bad: </span>
      {bad}
    </li>
    <li className={styles.statisticsItem}>
      <span className={styles.statisticsText}>Total: </span>
      {total}
    </li>
    <li className={styles.statisticsItem}>
      <span className={styles.statisticsText}>Positive feedback: </span>
      {positivePercentage}%
    </li>
  </ul>
);
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;