import React, { PropTypes } from 'react';

import Replies from './replies';
import AddReply from './add-reply';

export default (props) => (
    <div>
      <h1>Question Title</h1>
      <p>Question Description</p>
      <Replies />
      <AddReply />
    </div>
)
