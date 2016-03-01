let nextTodoId = 0;
export const addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		id: nextTodoId++,
		text
	}
}

export const setVisibilityFilter = (filter) => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	}
}

export const toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	}
}

export const setEditing = (id, val) => {
	return {
		type: 'SET_EDITING',
		id,
		val
	}
}

// export function addTodo(todo) {
// 	return {
// 		type: 'addTodo',
// 		todo
// 	}
// }
//
// export function editTodo(id, val) {
// 	return {
// 		type: 'editTodo',
// 		id,
// 		val
// 	}
// }
//
// export function setEdit(id) {
// 	return {
// 		type: 'setEdit',
// 		id
// 	}
// }
//
// export function deleteTodo(index) {
// 	return {
// 		type: 'deleteTodo',
// 		index
// 	}
// }
