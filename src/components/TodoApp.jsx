import React, {Component} from 'react';
import { connect } from 'react-redux'

import NewTodo from './newTodo'
import Note from './note'

import { addTodo } from '../actions'

const Todos = ({ todos, dispatch }) => (
	<div>
		<h1>Todos!!!</h1>
		<NewTodo onChange={e => {
				if(e.keyCode == 13) {
					dispatch(addTodo(e.target.value))
					e.target.value = ''
				}
		}} />

	<button onClick={()=>{dispatch(addTodo('New Task'))}}>+</button>

		<ul>
			{todos.notes.map(todo =>
					<li key={todo.id}>
						<Note note={todo} />
					</li>
			)}
		</ul>
	</div>
)

function mapStateToProps(todos) {
	return {
		todos
	}
}

export default connect(mapStateToProps) (Todos)
