import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from '../store';

import Todos from './todos';
import DevTools from './devTools';


export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<Todos />
					<DevTools />
				</div>
			</Provider>
		);
	}
}
