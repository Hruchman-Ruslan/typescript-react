import React, { useRef } from 'react'

interface INewTodo {
	onAddTodo: (todoText: string) => void
}

const NewTodo: React.FC<INewTodo> = ({ onAddTodo }) => {
	const textInputRef = useRef<HTMLInputElement>(null)

	const todoSumbmitHandler = (e: React.FormEvent) => {
		e.preventDefault()
		const enteredText = textInputRef.current!.value
		console.log(enteredText)
		onAddTodo(enteredText)
	}

	return (
		<form onSubmit={todoSumbmitHandler}>
			<div>
				<label htmlFor='todo-text'>Todo Text</label>
				<input type='text' id='todo-text' ref={textInputRef} />
			</div>
			<button type='submit'>ADD TODO</button>
		</form>
	)
}

export default NewTodo
