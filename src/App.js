import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      counter: 0,
      error: false,
    };
  }

  render() {
    return (
      <div
        data-test="component-element"
      >
        <h1 data-test="counter-display">Counter is {this.state.counter}</h1>
        {this.state.error && (
          <h1 data-test="error-message" style={{color: '#880000'}}>The value cannot be less than 0</h1>
        )}
        <button
          data-test="increment-button"
          onClick={
            () => {
              this.setState((prevState) => {
                return {counter: prevState.counter + 1, error: false};
              });
            }
          }
        >
          Increment Counter
        </button>
        <button
          data-test="decrement-button"
          onClick={
            () => {
              this.setState((prevState) => {
                const newCounter = prevState.counter - 1;

                return (newCounter < 0 ? ({error: true}) : ({counter: newCounter}));
              });
            }
          }
        >
          Decrement Counter
        </button>
      </div>
    );
  }
}

export default App;
