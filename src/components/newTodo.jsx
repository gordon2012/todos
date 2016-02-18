import React from 'react';

const newTodo = ({ onChange }) => (
	<div style={{border: "solid red 1px"}}>
		<h3>New!!</h3>
		<input type="text" onKeyUp={onChange} />
	</div>
);

export default newTodo;
