import React, { PropTypes } from 'react';

const Todo = ({ onClick, onEdit, completed, text, editing }) => (
	<li className="list-group-item"
		style={{
			textDecoration: completed ? 'line-through' : 'none'
		}}
	>
		<button className="btn btn-primary" onClick={onClick}>Done</button>
		<button className={editing ? "btn btn-success" : "btn btn-danger"} onClick={onEdit}>Edit</button>

		<span style={{padding: '0 16px'}}>{text}</span>


	</li>
);

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired,
};

export default Todo;
