import React, { PropTypes } from 'react';
import Question from './question';

export default (props) => {
  return (
    <section className="questions">
      <Question />
      <h1>Hi I am the questions component, being displayed by the questions container</h1>
    </section>
  )
}
