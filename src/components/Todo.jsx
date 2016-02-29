import React, { PropTypes } from 'react';

const Todo = ({ onClick, completed, text }) => (
	<li
		style={{
			textDecoration: completed ? 'line-through' : 'none'
		}}
	>
		<button className="btn btn-primary" onClick={onClick}>Done</button> {text}
	</li>
);

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired,
};

export default Todo;
