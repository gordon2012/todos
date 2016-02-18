import React from 'react'

import store from '../store';
import { editTodo } from '../actions'

// const

export default ({note}) =>
	<div style={{border: "solid 1px black", margin: "4px 0px"}}>
		{note.editing
			? <div style={{border: "solid 1px red"}}><input type="text" defaultValue={note.task} onBlur={e => {store.dispatch(editTodo(note.id, e.target.value))}} /></div>
			: <div style={{border: "solid 1px blue"}}><p>{note.task}</p></div>}



	</div>;
/*
TODO: onClick to set editing


<div style={{border: "solid 1px black", margin: "4px 0px"}}>
	<p>{note.editing
		? <input type="text" defaultValue={note.task} onBlur={e => {store.dispatch(editTodo(note.id, e.target.value))}} />
		: note.task}
	</p>
</div>;



*/
