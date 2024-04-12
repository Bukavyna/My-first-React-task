import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			 data: [
				{name: 'Taras L', salary: 800, increase: true, id: 1},
				{name: 'Denys K', salary: 3000, increase: true, id: 2},
				{name: 'Petro S', salary: 5000, increase: false, id: 3}
			]
		}
	}

	deleteItem = (id) => {
		this.setState(({data}) => {
			return {
				data: data.filter(item => item.id !== id)
			}
		})
	}

	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			id: this.maxId++
		}
		this.setState(({data}) => {
			const newArr = [...data, newItem];
			return {
				data: newArr
			}
		});
	}

	render() {
		return (
			<div className="app">
				<AppInfo/>

				<div className="search-panel">
					<SearchPanel/>
					<AppFilter/>
				</div>

				<EmployersList
					data={this.state.data}
					onDelete={this.deleteItem}/>
				<EmployersAddForm onAdd={this.addItem}/>
			</div>
		);
	}
}

export  default App;