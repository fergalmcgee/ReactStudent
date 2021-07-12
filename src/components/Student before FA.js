import React, { Component } from 'react';
import Infractions from './Infractions';
import AddNewNote from './AddNewNote';
import ViewStudentNotes from './ViewStudentNotes';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

export default class Student extends Component {
	render() {
		const {
			id,
			name,
			sClass,
			noHW,
			incompleteHW,
			noBooks,
			infractions,
			studentNotes,
			key,
		} = this.props.info;
		const {
			increaseClick,
			newNote,
			handleAddNote,
			handleAddNoteChange,
			delClick,
			selectTab,
			handleStudentEdit,
			handleStudentDelete,
		} = this.props;

		return (
			<div className="Student" key={key}>
				<div
					className="card text-white bg-primary mb-3"
					style={{ width: '100%', marginTop: '10px' }}
				>
					<div className="card-header">
						{name}{' '}
						{selectTab === 'Add' && (
							<button onClick={() => handleStudentEdit(id)}> edit</button>
						)}{' '}
						{selectTab === 'Add' && (
							<button onClick={() => handleStudentDelete(id)}>del </button>
						)}
					</div>

					{selectTab === 'Record' && (
						<div className="card-body">
							<div className="col-12">
								<h4>Class: {sClass}</h4>
							</div>
							<div className="col-12">
								<h4>
									No Homework{'   '}
									<span className="badge bg-danger text-light">{noHW}</span>
									{'       '}
									<button
										name="noHW"
										id="No Homework: "
										onClick={(e) => increaseClick(id, e)}
									>
										+
									</button>
								</h4>
							</div>
							<div className="col-12">
								<h4>
									Incomplete Homework{' '}
									<span className="badge bg-danger text-light">
										{incompleteHW}
									</span>{' '}
									<button
										name="incompleteHW"
										id="Incomplete Homework: "
										onClick={(e) => increaseClick(id, e)}
									>
										+
									</button>
								</h4>
							</div>
							<div className="col-12">
								<h4>
									No Books{' '}
									<span className="badge bg-danger text-light">
										{' '}
										{noBooks}{' '}
									</span>{' '}
									{/* <button
										type="button"
										className="btn btn-default btn-lg"
										name="noBooks"
										id="No Books"
										onClick={(e) => increaseClick(id, e)}
									> */}
									<FontAwesomeIcon
										icon={faPlusSquare}
										size={'lg'}
										type={'button'}
										onClick={(e) =>
											this.props.increaseClick(id, e, 'noBooks', 'No Books')
										}
									/>
									click
									{/* </button> */}
								</h4>
							</div>
							<h6>Infractions:</h6>
							{infractions.map((infraction) => (
								<Infractions
									studentID={id}
									key={infraction.id}
									infraction={infraction}
									delClick={delClick}
								/>
							))}
							<h6>Notes:</h6>
							<AddNewNote
								studentID={id}
								newNote={newNote}
								handleAddNote={handleAddNote}
								handleAddNoteChange={handleAddNoteChange}

								//delClick={delClick}
							/>
							{studentNotes.map((note) => (
								<ViewStudentNotes note={note} key={note.id} />
							))}
						</div>
					)}
				</div>
			</div>
		);
	}
}
