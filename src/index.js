import './style.scss';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// import todos from './reducers/todos'
import todoApp from './reducers'

import App from './components/App';
import DevTools from './components/DevTools';

let store = createStore(todoApp, undefined, DevTools.instrument());

render(
	<Provider store={store}>
		<div>
			<App />
			<DevTools />
		</div>
	</Provider>,
	document.getElementById('root')
);
