//import dependencies
import React, { PropTypes } from 'react';
import Store from '../store';

//import the Question component to place inside the container
import Question from '../components/question-detail';

//create a container that will render the Question component
class QuestionContainer extends React.Component {
  render () {
    return (
      <Question question={question}/>
    )
  }
}

export default QuestionContainer;
