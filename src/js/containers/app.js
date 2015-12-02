//import dependencies
import React, { PropTypes } from 'react';

//import component for main app header
import Header from '../components/header';

//create a component for the main app
//render the header component for the main app
//render all the child properties of App in main app.js
class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <h1>I am the app container</h1>
        {this.props.children}
      </div>
    )
  }
}

export default App;
