// src/App.js
import React, { Component } from 'react';
import counterStore from './stores/CounterStore';
import { increment, decrement, onInputChange } from './Actions/CounterActions';
import Counter from './Counter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: counterStore.getCount(),
      inputText: counterStore.getText()
    };
    this.updateCounter = this.updateCounter.bind(this);
    this.updateText = this.updateText.bind(this);
  }

  componentDidMount() {
    counterStore.on('change', this.updateCounter);
    counterStore.on('change', this.updateText);
  }

  componentWillUnmount() {
    counterStore.removeListener('change', this.updateCounter);
    counterStore.removeListener('change', this.updateText);
  }

  updateCounter() {
    this.setState({
      counter: counterStore.getCount()
    });
  }
  updateText() {
    this.setState({
      inputText: counterStore.getText()
    });
  }

  render() {
    return (
      <div>
        <Counter value={this.state.counter} onIncrement={increment}
          onDecrement={decrement} onInputChange={onInputChange} inputtext={this.state.inputText} />
      </div>
    );
  }
}

export default App;
