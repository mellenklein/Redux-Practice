import React, { PropTypes } from 'react';

//create template for the voting box, to be rendered inside each question in the questions list
export default (props) => (
  <section className="vote">
    <button>+</button>
    <button>-</button>
    <p>4 votes so far</p>
  </section>
)
