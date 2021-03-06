import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import LogItem from "./LogItem";
import AddLogItem from "./AddLogItem";

const App = () => {

	const [logs, setLogs] = useState([
		{
			_id : 1,
			text : 'This is log one',
			priority : 'low',
			user : 'Dennis',
			created : new Date().toString()
		},
		{
			_id : 2,
			text : 'This is log two',
			priority : 'high',
			user : 'Aziaya',
			created : new Date().toString()
		},
		{
			_id : 3,
			text : 'This is log three',
			priority : 'moderate',
			user : 'Kanyugira',
			created : new Date().toString()
		},
	])

	const addItem = (item) => {
		item._id = Math.floor(Math.random() * 90000) + 10000
		item.created = new Date().toString()
		setLogs([...logs, item])
	}

	return (
		<Container>
			<AddLogItem addItem={addItem}/>
			<Table>
				<thead>
					<tr>
						<th>Priority</th>
						<th>Log Text</th>
						<th>User</th>
						<th>Created</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
				{
					logs.map( (log) => (
						<LogItem  key={log._id}
								  text = {log.text}
								  priority = {log.priority}
								  user = {log.user}
								  created={log.created}
						/>
						))
				}
				</tbody>
			</Table>
		</Container>
	)
}

export default App
