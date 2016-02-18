import React from 'react'

// const

export default ({note}) =>
	<div style={{border: "solid 1px black", margin: "4px 0px"}}>

		<p>{note.editing
			? <input type="text" defaultValue={note.task} />
			: note.task}
		</p>


	</div>;


// function mapStateToProps




/*

onBlur={e => {dispatch(editTodo(note.id, 'test val'))}}



*/
