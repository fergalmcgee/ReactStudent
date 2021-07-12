import React, { Component } from 'react';

export default class Picker extends Component {
	constructor() {
		super();
		this.state = {
			student: '',
			studentsPassed: '',
			schosenClass: '',
		};
		this.timer = null;
		this.students = [];
		this.chosenClass = '';
	}

	componentDidMount() {
		const studentsPassed = this.props.students;
		this.chosenClass = this.props.chosenClass;

		this.students = studentsPassed
			.filter((student) => {
				if (student.sClass !== this.chosenClass) {
					return false;
				} else return true;
			})
			.map((student) => {
				return student.name;
			});
		console.log(this.students);
		console.log(this.chosenClass);
	}

	updateClass() {
		const studentsPassed = this.props.students;
		this.chosenClass = this.props.chosenClass;

		this.students = studentsPassed
			.filter((student) => {
				if (student.sClass !== this.chosenClass) {
					return false;
				} else return true;
			})
			.map((student) => {
				return student.name;
			});
		console.log(this.students);
		console.log(this.chosenClass);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.chosenClass !== this.props.chosenClass) {
			//chosenClass = this.props.chosenClass;
			console.log('updated???');
			this.updateClass();
			// console.log(chosenClass);
			this.setState({ schosenClass: this.props.chosenClass });
		}
	}

	loadStudents(randomStudent) {
		this.timer = setInterval(() => {
			console.log('in the timer');
			let num = Math.floor(Math.random() * (this.students.length - 1)) + 0;
			this.setState({ student: randomStudent[num] });
		}, 100);
	}

	stopTimeout() {
		clearInterval(this.timer);
		this.students = this.students.filter((student) => {
			return student !== this.state.student;
		});
		console.log(this.students);
	}

	randomStudent() {
		const randomStudents = this.students;
		this.loadStudents(randomStudents);
	}

	render() {
		return (
			<div>
				<div className="container">
					<h1> Random Name Generator</h1>
					<div className="row">
						<div className="col-sm-9">
							<div className="item">
								<p id="number">PRE CLASS</p>
							</div>
						</div>
						<div className="col-sm-3">
							<h2>Names Loaded:{this.state.student}</h2>
							<button
								className="button button2"
								onClick={() => this.randomStudent()}
							>
								Start
							</button>
							<button
								className="button button2"
								onClick={() => this.stopTimeout()}
							>
								Stop
							</button>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="col-sm-9">
						<p>Fergal McGee 2018</p>
					</div>
				</div>
			</div>
		);
	}
}
