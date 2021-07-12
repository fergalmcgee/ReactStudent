import React, { Component } from 'react';
import Infractions from './Infractions';
import AddNewNote from './AddNewNote';
import ViewStudentNotes from './ViewStudentNotes';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlusSquare,
	faTrash,
	faEdit,
} from '@fortawesome/free-solid-svg-icons';

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
						<div className="row">
							<div className="col-7">{name} </div>
							<div className="col-2">
								{selectTab === 'Add' && (
									<FontAwesomeIcon
										icon={faEdit}
										size={'lg'}
										type={'button'}
										onClick={() => handleStudentEdit(id)}
									></FontAwesomeIcon>
								)}
							</div>
							{'      '}
							<div className="col-1">
								{selectTab === 'Add' && (
									<FontAwesomeIcon
										icon={faTrash}
										size={'lg'}
										type={'button'}
										onClick={() => handleStudentDelete(id)}
									>
										del{' '}
									</FontAwesomeIcon>
								)}
							</div>
						</div>
					</div>

					{selectTab === 'Record' && (
						<div className="card-body">
							<div className="row" style={{ marginBottom: '2rem' }}>
								<div className="col-9">
									<h4>
										No Homework{' '}
										<span className="badge bg-danger text-light"> {noHW} </span>{' '}
									</h4>
								</div>

								<div className="col-3" style={{ textAlign: 'left' }}>
									<h4>
										<FontAwesomeIcon
											icon={faPlusSquare}
											size={'lg'}
											type={'button'}
											onClick={(e) =>
												this.props.increaseClick(id, e, 'noHW', 'No Homework')
											}
										/>
									</h4>
								</div>
							</div>
							<div className="row" style={{ marginBottom: '2rem' }}>
								<div className="col-9">
									<h4>
										Inc Homework{' '}
										<span className="badge bg-danger text-light">
											{' '}
											{incompleteHW}{' '}
										</span>{' '}
									</h4>
								</div>

								<div className="col-3" style={{ textAlign: 'left' }}>
									<h4>
										<FontAwesomeIcon
											icon={faPlusSquare}
											size={'lg'}
											type={'button'}
											onClick={(e) =>
												this.props.increaseClick(
													id,
													e,
													'incompleteHW',
													'Incomplete Homework'
												)
											}
										/>
									</h4>
								</div>
							</div>
							<div className="row" style={{ marginBottom: '2rem' }}>
								<div className="col-9">
									<h4>
										No Books{' '}
										<span className="badge bg-danger text-light">
											{' '}
											{noBooks}{' '}
										</span>{' '}
									</h4>
								</div>

								<div className="col-3" style={{ textAlign: 'left' }}>
									<h4>
										<FontAwesomeIcon
											icon={faPlusSquare}
											size={'lg'}
											type={'button'}
											onClick={(e) =>
												this.props.increaseClick(id, e, 'noBooks', 'No Books')
											}
										/>
									</h4>
								</div>
							</div>
							<hr className="solid" />
							<h4>Infractions</h4>
							{infractions.map((infraction) => (
								<Infractions
									studentID={id}
									key={infraction.id}
									infraction={infraction}
									delClick={delClick}
								/>
							))}
							<hr className="solid" />
							<h4>Notes</h4>
							<AddNewNote
								studentID={id}
								newNote={newNote}
								handleAddNote={handleAddNote}
								handleAddNoteChange={handleAddNoteChange}

								//delClick={delClick}
							/>
							{studentNotes.reverse().map((note) => (
								<ViewStudentNotes note={note} key={note.id} />
							))}
						</div>
					)}
				</div>
			</div>
		);
	}
}
