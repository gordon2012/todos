import React, { PropTypes } from 'react';

const Todo = ({ onClick, completed, text }) => (
	<li className="black-box"
		onClick={onClick}
		style={{
			textDecoration: completed ? 'line-through' : 'none'
		}}
	>
		{text}
	</li>
);

Todo.PropTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired,
};

export default Todo;
