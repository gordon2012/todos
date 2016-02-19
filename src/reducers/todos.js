import uuid from 'node-uuid';

export default (state={notes: [{id: uuid.v4(), task: 'Code A Lot More!', editing: false}]}, action) => {
	switch(action.type) {
		case 'addTodo':
			return {
				notes: [...state.notes, {id: uuid.v4(), task: action.todo, editing: true}]
			};
		case 'editTodo':
			return {
				notes: state.notes.map(note => {
					if(note.id !== action.id) {
						return note;
					}
					return Object.assign({}, note, {
						task: action.val,
						editing: false
					});
				})
			};
		case 'setEdit':
			return {
				notes: state.notes.map(note => {
					if(note.id !== action.id) {
						return note;
					}
					return Object.assign({}, note, {
						editing: true
					});
				})
			};
		default:
			return state
	}
}
