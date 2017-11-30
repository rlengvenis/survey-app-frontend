import PropTypes from 'prop-types';

/***
 * Reusable custom prop types
 */

const answerOption = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
});

const question = PropTypes.shape({
  answerOptions: PropTypes.arrayOf(answerOption).isRequired,
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
});

export default {
  answerOption,
  question
};
