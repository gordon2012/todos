export function addTodo(todo) {
	return {
		type: 'addTodo',
		todo
	}
}

export function editTodo(index, val) {
	return {
		type: 'editTodo',
		index,
		val
	}
}

export function deleteTodo(index) {
	return {
		type: 'deleteTodo',
		index
	}
}
