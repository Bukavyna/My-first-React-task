import './app-info.css';

const AppInfo = () => {
	let nameCompany = 'Taras & Pavel';
	return (
		<div className="app-info">
			<h1>Облік працівників в компанії <i>'{nameCompany}'</i></h1>
			<h2>Загальна кількість працівників: </h2>
			<h2>Премію отримають: </h2>
		</div>
	)
}

export default AppInfo;