import React from 'react';
import {connect} from 'react-redux';

import getSurveyQuestions from '../../selectors/getSurveryQuestions';
import './Survey.css';

const mapStateToProps = (state) => ({
  surveyConfig: state.surveyConfig,
  surveyQuestions: getSurveyQuestions(state)
});

const Survey = ({
  surveyConfig,
  surveyQuestions
}) => {

  return (
    <article>
      <h1>{surveyConfig.surveyName}</h1>
      <p>{surveyConfig.surveyDescription}</p>
      <div>
        <form className="questions-form" method="POST" action="localhost">
          {
            surveyQuestions.map((question) => {
              return (
                <div className="form-group">
                  <h2> {question.title} <abbr title="Required">*</abbr></h2>
                  <input
                    className="form-control"
                    type="text"
                    name="movieName"
                    id="movieName"
                    placeholder="Your answer"
                  />

                  {question.answerOptions > 0 &&

                    question.answerOptions.map((answerOption) => {
                      return (
                        <h1>a</h1>
                      );
                    })
                  }
                </div>
              )
            })
          }




          <div className="form-group">
            <h2>How good was it? <abbr title="Required">*</abbr></h2>
            <div className="form-radio-group">
              <div className="form-scale-label-left">
                <span>Boring</span> shit
              </div>
              <ul className="form-scale">
                <li>
                  <label htmlFor="quality1Id">1</label>
                  <input type="radio" name="title" value="1" id="quality1Id"/>
                </li>
                <li>
                  <label htmlFor="quality2Id">2</label>
                  <input type="radio" name="title" value="2" id="quality2Id"/>
                </li>
                <li>
                  <label htmlFor="quality3Id">3</label>
                  <input type="radio" name="title" value="3" id="quality3Id"/>
                </li>
                <li>
                  <label htmlFor="quality4Id">4</label>
                  <input type="radio" name="title" value="4" id="quality4Id"/>
                </li>
                <li>
                  <label htmlFor="quality5Id">5</label>
                  <input type="radio" name="title" value="5" id="quality5Id"/>
                </li>
              </ul>
              <div className="form-scale-label-right">
                Epic
              </div>
            </div>
          </div>
          <div>
            <button className="submit" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </article>
  );
}

export default connect(mapStateToProps, null)(Survey);