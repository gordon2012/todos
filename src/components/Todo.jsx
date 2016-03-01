import React, { PropTypes } from 'react';

const Todo = ({ onClick, onEdit, onSave, completed, text, editing }) => (
	<li className="list-group-item"
		style={{
			textDecoration: completed ? 'line-through' : 'none'
		}}
	>

		{editing ?
			<div>
				<input type="text" defaultValue={text} onBlur={onEdit} />
			</div>
		:
			<div>
				<button className="btn btn-primary" onClick={onClick}>Done</button>
				<button className={editing ? "btn btn-success" : "btn btn-danger"} onClick={onEdit}>Edit</button>
				<span style={{padding: '0 16px'}}>{text}</span>
			</div>
		}




	</li>
);

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired,
};

export default Todo;
