import { useState, useEffect, useRef } from "react";

function TaskForm(props) {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [datetime, setDatetime] = useState('');
	const [priority, setPriority] = useState('1');

	function handleSubmit(event) {
		event.preventDefault();
		const task = {
			title: title,
			description: description,
			datetime: Date.parse(datetime),
			priority: parseInt(priority),
			createdAt: Date.now(),
			updatedAt: Date.now()
		};
		props.onAddTask(task);
		setTitle('');
		setDescription('');
		setDatetime('');
		setPriority('1');
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="title">Title:</label>
			<input type="text" id="title" name="title" value={title} onChange={event => setTitle(event.target.value)} required /><br />

			<label htmlFor="description">Description:</label>
			<textarea id="description" name="description" value={description} onChange={event => setDescription(event.target.value)} required></textarea><br />

			<label htmlFor="datetime">Date and Time:</label>
			<input type="datetime-local" id="datetime" name="datetime" value={datetime} onChange={event => setDatetime(event.target.value)} required /><br />

			<label htmlFor="priority">Priority:</label>
			<select id="priority" name="priority" value={priority} onChange={event => setPriority(event.target.value)} required>
				<option value="1">1 - Lowest</option>
				<option value="2">2 - Low</option>
				<option value="3">3 - Medium</option>
				<option value="4">4 - High</option>
				<option value="5">5 - Highest</option>
			</select><br />

			<input type="submit" value="Add Task" />
		</form>
	);
}

function Todo() {

	const [allTasks, setAllTasks] = useState([]);


	const hardcodedTasks = [
		{
			title: 'Task 1',
			description: 'This is the first task',
			datetime: 1651738200000, // May 4, 2022, 10:30:00 AM UTC in milliseconds
			priority: 5,
			createdAt: Date.now(),
			updatedAt: Date.now()
		},
		{
			title: 'Task 2',
			description: 'This is the second task',
			datetime: 1651821600000, // May 5, 2022, 2:00:00 PM UTC in milliseconds
			priority: 3,
			createdAt: Date.now(),
			updatedAt: Date.now()
		},
		{
			title: 'Task 3',
			description: 'This is the third task',
			datetime: 1651905000000, // May 6, 2022, 4:30:00 PM UTC in milliseconds
			priority: 2,
			createdAt: Date.now(),
			updatedAt: Date.now()
		},
		{
			title: 'Task 4',
			description: 'This is the fourth task',
			datetime: 1651990800000, // May 7, 2022, 9:00:00 AM UTC in milliseconds
			priority: 5,
			createdAt: Date.now(),
			updatedAt: Date.now()
		},
		{
			title: 'Task 5',
			description: 'This is the fifth task',
			datetime: 1652077200000, // May 8, 2022, 1:00:00 PM UTC in milliseconds
			priority: 4,
			createdAt: Date.now(),
			updatedAt: Date.now()
		}
	]

	useEffect(() => {
		setAllTasks(hardcodedTasks)
	}, [])


	const addNewTask = (task) => {
		let newTasksArr = [...allTasks];
		newTasksArr.push(task);
		setAllTasks(newTasksArr);
	}

	let displayTasks = allTasks.map((task, index) => {
		let id = "task-" + index;
		return (
			<li id={id} key={id}>
				<p>{task.title} , {task.description} , {task.datetime} , {task.priority} , {task.createdAt} , {task.updatedAt} </p>
			</li >
		)
	})

	return (
		<div>
			<h1>Todo list!</h1>
			<ul>
				{displayTasks}
			</ul>
			<h1>Add new task</h1>
			<TaskForm onAddTask={addNewTask} />

		</div>
	);
}

export default Todo;
