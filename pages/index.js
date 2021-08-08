import { Box, Button, Center, Flex, Heading, HStack, Input, ListItem, List } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useArray } from './useArray';

export default function Home() {
	const [ task, setTask ] = useState('');
	const todos = useArray([
		{ id: 0, text: 'hello' },
		{ id: 1, text: 'world' },
		{ id: 2, text: 'lol' },
		{ id: 3, text: 'haha' }
	]);
	return (
		<Center>
			<title>useArray Example</title>
			<Box w="90%">
				<Heading mt="4" textAlign="center">
					Tasks with useArray
				</Heading>
				<Center>
					<HStack minW="24rem" justifyContent="space-between" my="4">
						<Input
							minW="19rem"
							maxW="50%"
							value={task}
							onChange={e => setTask(e.target.value)}
							placeholder="Task"
						/>
						<Button
							colorScheme="purple"
							rounded="sm"
							disabled={!task}
							onClick={() => {
								todos.add({
									id: todos.value.length ? todos.value[todos.value.length - 1].id + 1 : 0,
									text: task
								});
								setTask('');
							}}
						>
							Add
						</Button>{' '}
						<Button rounded="sm" colorScheme="red" onClick={todos.clear}>
							Clear All
						</Button>
					</HStack>
				</Center>
				<Center>
					<List>
						{todos.value.length  ? (
							todos.value.map((todo, idx) => (
								<ListItem key={idx}>
									<Heading fontSize="xl">
										{todo.id + 1}) {todo.text}
										<Button
											rounded="full"
											pb="0.5"
											mx="4"
											my="2"
											size="xs"
											colorScheme="red"
											onClick={() => todos.removeById(todo.id)}
										>
											delete
										</Button>{' '}
									</Heading>
								</ListItem>
							))
						) : (<Heading fontSize="xl" color="blackAlpha.300">So empty...</Heading>
						)}
					</List>
				</Center>
			</Box>
		</Center>
	);
}
