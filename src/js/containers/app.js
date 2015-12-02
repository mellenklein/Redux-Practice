//import dependencies
import React, { PropTypes } from 'react';


//create a component for the main app
//render all the child properties of App in main app.js 
class App extends React.Component {
  render () {
    return (
      <div>
        <h1>I am the app container</h1>
        {this.props.children}
      </div>
    )
  }
}

export default App;
