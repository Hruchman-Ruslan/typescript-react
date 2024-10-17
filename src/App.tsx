import React, { useState } from 'react'

import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'

import { ITodo } from './todo.model'

const App: React.FC = () => {
	const [todos, setTodos] = useState<ITodo[]>([])

	const todoAddHandler = (text: string) => {
		setTodos([{ id: Math.random().toString(), text: text }])
	}

	return (
		<div className='App'>
			<NewTodo onAddTodo={todoAddHandler} />
			<TodoList items={todos} />
		</div>
	)
}

export default App
