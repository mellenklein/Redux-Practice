import React from 'react'
import VoteBox from './votebox';

export default (props) => {
  return (
    <div className="question">
      <VoteBox />
      <section className="content">
        <h2>
          <a href="#">Question Title</a>
        </h2>
        <p>username of question author</p>
      </section>
    </div>
  )
};
