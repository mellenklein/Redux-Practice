//import dependencies
import React, { PropTypes } from 'react';
import Store from '../store';

//import the questions list component
import Questions from '../components/questions';

//create a container that will render the questions list component
class QuestionsContainer extends React.Component {
  render () {
    return (
      <Questions />
    )
  }
}

export default QuestionsContainer;
