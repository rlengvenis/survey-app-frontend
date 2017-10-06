import PropTypes from 'prop-types';


// Put all reusable prop types there

const answerOption = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
});

const question = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  answerOptions: PropTypes.arrayOf(answerOption).isRequired
});

export default {
  answerOption,
  question
};
