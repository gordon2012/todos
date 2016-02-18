import uuid from 'node-uuid';

export default (state={notes: [{id: uuid.v4(), task: 'Code A Lot More!', editing: false}]}, action) => {
	switch(action.type) {
		case 'addTodo':
			return {
				notes: [...state.notes, {id: uuid.v4(), task: action.todo, editing: true}]
			};
		case 'editTodo':
			console.log('EDIT TODO');
			return state;
		default:
			return state
	}
}
