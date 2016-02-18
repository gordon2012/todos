import Immutable from 'immutable'
import { createStore } from 'redux';
import todos from './reducers/todos'
import DevTools from './components/devTools';
import uuid from 'node-uuid';


 export default createStore(todos, undefined, DevTools.instrument());
	// {
	//    notes: [
	// 		{ id: uuid.v4(), task: 'Code More!' },
	// 		{ id: uuid.v4(), task: 'Always Be Coding!' },
	// 	]
	// },
