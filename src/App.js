import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';
import ClassChoose from './components/ClassChoose';

function App() {
	return (
		<div className="container">
			<div className="col-lg-6 mx-auto col-md-9 col-sm-12 mt-4">
				<h3 className="text-capitalize text-center">student list</h3>
				<div className="App">
					<ClassChoose />
				</div>
			</div>
		</div>
	);
}

export default App;
