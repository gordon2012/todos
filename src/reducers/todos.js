const todo = (state, action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false
			};

		case 'TOGGLE_TODO':
			if(state.id !== action.id) {
				return state;
			}
			return Object.assign({}, state, {
				completed: !state.completed
			});

		default:
			return state;
	}
}

const todos = (state = [], action) => {
	switch(action.type) {
		case: 'ADD_TODO':
			return [
				...state,
				todo(undefined, action)
			];
		case 'TOGGLE_TODO':
			return state.map(t =>
				todo(t, action)
			);
		default:
			return state;
	}
}



// import uuid from 'node-uuid';
//
// export default (state={notes: [{id: uuid.v4(), task: 'Code A Lot More!', editing: false}]}, action) => {
// 	switch(action.type) {
// 		case 'addTodo':
// 			return {
// 				notes: [...state.notes, {id: uuid.v4(), task: action.todo, editing: false}]
// 			};
// 		case 'editTodo':
// 			return {
// 				notes: state.notes.map(note => {
// 					if(note.id !== action.id) {
// 						return note;
// 					}
// 					return Object.assign({}, note, {
// 						task: action.val,
// 						editing: false
// 					});
// 				})
// 			};
// 		case 'setEdit':
// 			return {
// 				notes: state.notes.map(note => {
// 					if(note.id !== action.id) {
// 						return note;
// 					}
// 					return Object.assign({}, note, {
// 						editing: true
// 					});
// 				})
// 			};
// 		default:
// 			return state
// 	}
// }
