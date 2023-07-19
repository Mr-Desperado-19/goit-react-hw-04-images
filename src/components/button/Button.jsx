import PropTypes from 'prop-types';
import "./Button.scss"

const Button = ({ onClick }) => (
  <button type="button" className="btn_load-more" onClick={onClick}>
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;