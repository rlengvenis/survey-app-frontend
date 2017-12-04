import PropTypes from 'prop-types';

/***
 * Reusable custom prop types
 */

const answers = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  answerText: PropTypes.string.isRequired
});

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
  answers,
  answerOption,
  question
};
