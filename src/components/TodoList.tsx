import React from 'react'

interface ITodos {
	items: {
		id: string
		text: string
	}[]
}

const TodoList: React.FC<ITodos> = ({ items }) => {
	return (
		<ul>
			{items.map(({ id, text }) => (
				<li key={id}> {text}</li>
			))}
		</ul>
	)
}

export default TodoList
