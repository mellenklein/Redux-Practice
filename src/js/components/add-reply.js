import React, { PropTypes } from 'react'
import Store from '../store';

//create a component for a user comment to be rendered, which
//will be rendered inside expanded question details
class AddReply extends React.Component {
  render () {
    return (
      <section className="addReply">
        <textarea placeholder="Add a comment..."></textarea>
        <button>Add Reply</button>
      </section>
    )
  }
}

export default AddReply;
