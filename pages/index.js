import React from 'react';
import { useArray } from './useArray';

export default function Home() {
	const todos = useArray([
		{ id: 0, text: 'hello' },
		{ id: 1, text: 'world' },
		{ id: 2, text: 'lol' },
		{ id: 3, text: 'haha' }
	]);
	return (
		<React.Fragment>
			<span>hello world</span>
			<button onClick={() => todos.add({ id: todos.value[todos.value.length - 1].id + 1, text: Math.random() })}>
				Add
			</button>
			<ul>
				{todos.value.map((todo, idx) => (
					<li key={idx}>
						{todo.id}:{todo.text}
						<button
							onClick={() => {
								todos.removeById(todo.id);
								console.log(todos);
							}}
						>
							delete
						</button>
					</li>
				))}
			</ul>
			<button onClick={todos.clear}>Clear All</button>
		</React.Fragment>
	);
}
