import uuid from 'node-uuid';

export default (state={notes: [{id: uuid.v4(), task: 'Code A Lot More!'}]}, action) => {
	switch(action.type) {
		case 'addTodo':
			// return state.push(action.todo)
			return {
				notes: [...state.notes, {id: uuid.v4(), task: action.todo}]
			};
		default:
			return state
	}
}


//
