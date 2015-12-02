//import dependencies
import React, { PropTypes } from 'react'

//create a container that will render the question component
class QuestionContainer extends React.Component {
  render () {
    return (
      <h1>I am the individual question container! You won't see me on the home page because I am on a sub route!</h1>
    )
  }
}

export default QuestionContainer;
