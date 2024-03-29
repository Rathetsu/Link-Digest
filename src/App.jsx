import Hero from './components/Hero';
import Summary from './components/Summary';
import './App.css';

const App = () => {
	return (
		<main>
			<div className='main'>
				<div className='gradient' />
				<div className='mt-0'>
					<Hero />
					{/* <Summary /> */}
				</div>
			</div>
		</main>
	);
};

export default App;