import css from "./Options.module.css";
import PropTypes from "prop-types";

const Options = ({ options, updateFeedback, totalFeedback, reset }) => {
  return (
    <div className={css.btnList}>
      {Object.keys(options).map((option, index) => {
        return (
          <button
            className={css.btn}
            key={index}
            type="button"
            onClick={(event) => {
              updateFeedback(event.target.textContent);
            }}
          >
            {option}
          </button>
        );
      })}
      {totalFeedback !== 0 ? (
        <button
          className={css.btnReset}
          onClick={() => {
            reset();
          }}
          type="button"
        >
          reset
        </button>
      ) : null}
    </div>
  );
};

Options.propTypes = {
  name: PropTypes.string,
};

export default Options;
