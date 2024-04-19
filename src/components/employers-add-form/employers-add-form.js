import { Component } from 'react';

// import './employers-add-form.css';
import './employers-add-form.scss';

class EmployersAddForm extends Component {
	state = {
			name: '',
			salary: '',
			error: ''
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		const {name, salary} = this.state;

		if (name.length >= 3 && salary !== '') {
			this.props.onAdd(name, salary);
			this.setState({
				name: '',
				salary: '',
				error: ''
			})
		} else {
			this.setState({
				error: `Не правильний ввід даних!`
			});
		}
	}

	render() {
			const {name, salary, error} = this.state;

		return (
			<div className={'app-add-form'}>
				<h3>Добавити нового співробітника</h3>
				<form
					className={'add-form d-flex'}
					onSubmit={this.onSubmit}>
					<input type={'text'}
					       className={'form-control new-post-label'}
					       placeholder={'Як його звати'}
					       name = "name"
					       value ={name}
								 onChange={this.onValueChange}/>
					<input type={'number'}
					       className={'form-control new-post-label'}
					       placeholder={'З/П в $?'}
					       name = "salary"
					       value ={salary}
					       onChange={this.onValueChange}/>

					<button type={'submit'}
					        className={'btn btn-outline-light'}>
									Додати
					</button>
				</form>
				{error && <div style={{ color: 'red' }}>{error}</div>}
			</div>
		)
	}
}

export default EmployersAddForm;