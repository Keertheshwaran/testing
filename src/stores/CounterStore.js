// src/stores/CounterStore.js
import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class CounterStore extends EventEmitter {
  constructor() {
    super();
    this.counter = 0
    this.inputText = ""
  }

  getCount() {
    return this.counter;
  }
  getText() {
    return this.inputText;
  }

  handleActions(action) {
    switch(action.type) {
      case 'INCREMENT':
        this.counter++;
        this.emit('change');
        break;
      case 'DECREMENT':
        this.counter--;
        this.emit('change');
        break;
      case 'CHANGETEXT':
        let elementValue = document.getElementById("demo").value;
        this.inputText = elementValue;
        this.emit('change');
        break;
      default:
    }
  }
}

const counterStore = new CounterStore();
dispatcher.register(counterStore.handleActions.bind(counterStore));

export default counterStore;
