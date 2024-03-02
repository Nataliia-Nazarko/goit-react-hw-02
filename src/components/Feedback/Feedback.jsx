import css from "./Feedback.module.css";
import PropTypes from "prop-types";

const Feedback = ({ stats, totalFeedback, percentage }) => {
  return (
    <div className={css.feedbackContainer}>
      {Object.keys(stats).map((state, index) => {
        return (
          <p key={index} className={css.feedback}>
            {state}: <span>{stats[state]}</span>
          </p>
        );
      })}
      <p className={css.feedback}>total: {totalFeedback}</p>
      <p className={css.feedback}>positive: {percentage}%</p>
    </div>
  );
};

Feedback.propTypes = {
  state: PropTypes.number,
  totalFeedback: PropTypes.number,
  percentage: PropTypes.number,
};

export default Feedback;
