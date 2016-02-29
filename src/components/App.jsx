import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
	<div className="panel panel-default">
		<div className="panel-heading"><h1>Todos</h1></div>
		<div className="panel-body">
			<AddTodo />
			<VisibleTodoList />
			<Footer />
		</div>
	</div>
);

export default App;
