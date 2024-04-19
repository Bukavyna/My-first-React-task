import './app-filter.css';

const AppFilter = (props) => {
	const buttonsData = [
		{name: 'all', label: 'Bci працівники'},
		{name: 'rise', label: 'На підвищення'},
		{name: 'moreThen1000', label: 'З/п більше 1000$'},
		{name: 'moreThen5000', label: 'З/п більше 5000$'}
		];

	const buttons = buttonsData.map(({name, label}) => {
		const active = props.filter === name;
		const clazz = active ? 'btn-light' : 'btn-outline-light';
		return (
			<button type="button"
				className={`btn ${clazz}`}
			  key={name}
				onClick={() => props.onFilterSelect(name)}>
				{label}
			</button>
		)
	})

	return (
		<div className="btn-group">
			{buttons}
			{/*<button type="button"*/}
			{/*	className="btn btn-light">*/}
			{/*		Усі працівники*/}
			{/*</button>*/}
			{/*<button type="button"*/}
			{/*	className="btn btn-outline-light">*/}
			{/*		На підвищення*/}
			{/*</button>*/}
			{/*<button type="button"*/}
			{/*	className="btn btn-outline-light">*/}
			{/*		З/п більше 1000$;*/}
			{/*</button>*/}
		</div>
	)
}

export default AppFilter;