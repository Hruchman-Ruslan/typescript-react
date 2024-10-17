import React from 'react'

import './TodoList.css'

interface ITodos {
	items: {
		id: string
		text: string
	}[]
	onDeleteTodo: (id: string) => void
}

const TodoList: React.FC<ITodos> = ({ items, onDeleteTodo }) => {
	return (
		<ul>
			{items.map(({ id, text }) => (
				<li key={id}>
					<span>{text}</span>
					<button onClick={onDeleteTodo.bind(null, id)}>DELETE</button>
				</li>
			))}
		</ul>
	)
}

export default TodoList
