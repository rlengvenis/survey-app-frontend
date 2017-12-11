import PropTypes from 'prop-types';

/***
 * Reusable custom prop types
 */

const answer = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  answerText: PropTypes.string.isRequired
});

const answerOption = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
});

const question = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  answerOptions: PropTypes.arrayOf(answerOption),
  answers: PropTypes.arrayOf(answer),
  title: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired
});

export default {
  answer,
  answerOption,
  question
};
