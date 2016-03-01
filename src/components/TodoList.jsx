import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick, onEditClick }) => (
	<ul className="list-group">
		{todos.map(todo =>
			<Todo
				key={todo.id}
				{...todo}
				onClick={() => onTodoClick(todo.id)}
				onEdit={() => onEditClick(todo.id, !todo.editing)}
			/>
		)}
	</ul>
);

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired
	}).isRequired).isRequired,
	onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
