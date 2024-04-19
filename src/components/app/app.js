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
				{name: 'Taras L', salary: 800, increase: false, rise: true, id: 1},
				{name: 'Denys K', salary: 3000, increase: true, rise: false, id: 2},
				{name: 'Petro S', salary: 5000, increase: false, rise: false, id: 3}
			 ],
			term: '',
			filter: 'all',
		};
		this.maxId = 4;
	}

				///// ========= Повертаємо сталі об'єкти, якщо їх було видалино ===============

	componentDidMount() {
			localStorage.setItem('list', JSON.stringify([
				{name: 'Taras L', salary: 800, increase: false, rise: true, id: 1},
				{name: 'Denys K', salary: 3000, increase: true, rise: false, id: 2},
				{name: 'Petro S', salary: 5000, increase: false, rise: false, id: 3}
			]));
		const dataLocal = JSON.parse(localStorage.getItem('list')) || [];

			return this.setState({data: dataLocal});
	}

		///// ==========  Видаляємо ою'єкти =========

	deleteItem = (id) => {
		this.setState(({data}) => {
			const newData = data.filter(item => item.id !== id);

			localStorage.setItem('list', JSON.stringify(newData));
			return { data: newData };
		})
	}

	// ================ Створюємо новий об'єкт ===========

	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			rise: false,
			id: this.maxId++
		};

		this.setState(({data}) => {
			const newArr = [...data, newItem];

			localStorage.setItem('list', JSON.stringify(newArr));
			return {
				data: newArr
			}
		});
	}


 // // // ============  Три різні методи відображення кількості працівників і кількості премій =====

// onToggleIncrease = (id) => {

 // ================ Другий метод ===========
// 	this.setState(({data}) => ({
// 		data: data.map(item => {
// 			if (item.id === id) {
// 				return {...item, increase: !item.increase}
// 			}
// 			return  item
// 		})
// 	}))

	// ================ Перший метод ===========
// 	// this.setState(({data}) => {
// 	// 	const index = data.findIndex(elem => elem.id === id);
// 	//
// 	// 	const old = data[index];
// 	// 	const newItem = {...old, increase: !old.increase};
// 	// 	const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
// 	//
// 	// 	return {
// 	// 		data: newArr
// 	// 	}
// 	// })
// }

	// ================ Другий метод ===========
// onToggleRise = (id) => {
// 	this.setState(({data}) => ({
// 		data: data.map(item => {
// 			if (item.id === id) {
// 				return {...item, rise: !item.rise}
// 			}
// 			return item
// 		})
// 	}))
// }

	// ================ Третійй метод. Загальний для двох дій  ===========

	onToggleProp = (id, prop) => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === id) {
					return {...item, [prop]: !item[prop]}
				}
				return item
			})
		}))
	}

	searchEmp = (items, term) => {
		if (term.length === 0) {
			return items;
		}
		return items.filter(item => {
			return item.name.indexOf(term) > -1
		})
	}

	onUpdateSearch = (term) => {
		this.setState({term})
	}


					// ====== Filters  ======
	filterPost = (items, filter) => {
		switch (filter) {
			case 'rise':
				return items.filter(item => item.rise);
			case 'moreThen1000':
				return items.filter(item => item.salary > 1000);
			case 'moreThen5000':
				return items.filter(item => item.salary > 5000);
			default:
				return items
		}
	}

	onFilterSelect = (filter) => {
		this.setState({filter});
	}

	render() {
		const {data, term, filter} = this.state;
		const employees = this.state.data.length;
		const increased = this.state.data.filter(item => item.increase).length;
		const visibleData = this.filterPost(this.searchEmp(data, term), filter);

		return (
			<div className="app">
				<AppInfo
					employees={employees}
					increased={increased}/>

				<div className="search-panel">
					<SearchPanel
						onUpdateSearch={this.onUpdateSearch}/>
					<AppFilter
						filter={filter}
						onFilterSelect={this.onFilterSelect}/>
				</div>

				<EmployersList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}/>
				<EmployersAddForm
					onAdd={this.addItem}/>
			</div>
		);
	}
}

export  default App;