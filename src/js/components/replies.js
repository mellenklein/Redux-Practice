import React, { PropTypes } from 'react';

import VoteBox from './votebox';

export default (props) => (
      <section className="replies">
        <div>
          <VoteBox />
          <p>Here is the comment message</p>
          <footer>Username / Votes</footer>
        </div>
      </section>
)
