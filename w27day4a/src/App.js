import React from 'react';
import './App.css';
import Button from './Button';
import Label from './Label.js';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      clickMe:0
    }
  }

  clickedMeButtonInc = () => {
    console.log('inc button clicked');
    this.setState({
      clickMe: this.state.clickMe + 1,
    },() => {
      console.log(this.state);
    });
  }

  clickedMeButtonDec = () => {
    console.log('dec button clicked');
    this.setState({
      clickMe: this.state.clickMe - 1,
    },() => {
      console.log(this.state);
    });
  }
  render() {
    const { clickMe } = this.state;
    return (
      <div className="App">
        <header className="App-header">
        <Label clickedTimes={clickMe} />
          <span>
            <Button title={'Count ++ '} clickHandler={this.clickedMeButtonInc}/>
            <Button title={'Count -- '} clickHandler={this.clickedMeButtonDec}/>
          </span>
        </header>
      </div>
    );
  }
}

export default App;
