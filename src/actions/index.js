export function addTodo(todo) {
	return {
		type: 'addTodo',
		todo
	}
}

export function editTodo(id, val) {
	return {
		type: 'editTodo',
		id,
		val
	}
}

export function setEdit(id) {
	return {
		type: 'setEdit',
		id
	}
}

export function deleteTodo(index) {
	return {
		type: 'deleteTodo',
		index
	}
}
