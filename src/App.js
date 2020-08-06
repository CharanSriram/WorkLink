import React from 'react';
import './App.css';
import Sidebar from './universal/sidebar'
import BodyContainer from './universal/bodycontainer'
import SignUp from './universal/signup'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signedUp: false
    }
  }

  clickEvent = () => {
    this.setState({
      signedUp: true
    })
  }

  render() {
    if (!this.state.signedUp) {
      return (
        <div className="App">
          <SignUp click={this.clickEvent}></SignUp>
        </div>
      )
    }
    return (
      <div className="App">
        <Sidebar></Sidebar>
        <BodyContainer></BodyContainer>
      </div>
    );
  }
  
  
}

export default App;
