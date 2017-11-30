import {schema} from 'normalizr';


const answerOption = new schema.Entity('answerOptions', undefined, {
  idAttribute: '_id'
});

const answer = new schema.Entity('answers', undefined, {
  idAttribute: '_id'
});

const question = new schema.Entity('questions', {
  answers: [answer],
  answerOptions: [answerOption]
}, {
  idAttribute: '_id'
});

const survey = new schema.Entity('surveys',
  {questions: [question]},
  {idAttribute: '_id'}
);

export default survey;