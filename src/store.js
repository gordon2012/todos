import Immutable from 'immutable'
import { createStore } from 'redux';
import todos from './reducers/todos'
import DevTools from './components/devTools';


export default createStore(todos, Immutable.List(['Code More!']), DevTools.instrument());
