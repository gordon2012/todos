import React from 'react'
import { connect } from 'react-redux'

import NewTodo from './newTodo'
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
			<ul>
				{todos.notes.map(todo => {
					return (
						<li key={todo.id}>
							<h4>{todo.id}</h4>
							<p>{todo.task}</p>
						</li>
					)
				})}
			</ul>
		</div>
)

function mapStateToProps(todos) {
	return {
		todos
	}
}

export default connect(mapStateToProps) (Todos)
