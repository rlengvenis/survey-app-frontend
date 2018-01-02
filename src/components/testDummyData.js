import surveyQuestionTypes from '../constants/questionTypes';


export const survey = {
  _id: 'Id_s1',
  name: 'Test',
  description: 'Test Description',
  questions: [{
    _id: 'Id_q1',
    title: 'Test question 1',
    type: surveyQuestionTypes.MULTIPLE_ANSWER,
    answerOptions: [{
      _id: 'Id_ao1',
      title: 'Option A',
    }, {
      _id: 'Id_ao2',
      title: 'Option B'
    }],
    answers: [{
      _id: 'Id_a1',
      answerText: 'Option A'
    }, {
      _id: 'Id_a2',
      answerText: 'Option B'
    }]
  }, {
    _id: 'Id_q2',
    title: 'Test question 2',
    type: surveyQuestionTypes.SHORT_ANSWER,
    answers: [{
      _id: 'Id_a3',
      answerText: 'First answer'
    }, {
      _id: 'Id_a4',
      answerText: 'Second answer'
    }]
  }]
};

