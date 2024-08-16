import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import Pizza from './components/Pizza';
import './scss/app.scss';

function App() {
	const [pizzas, setPizzas] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		console.log('Fetching pizzas...');
		const fetchPizzas = async () => {
			try {
				const response = await axios.get('/data/pizzas.json');
				setPizzas(response.data);
			} catch (error) {
				console.error('Error fetching the pizzas data', error);
			} finally {
				setLoading(false);
			}
		};

		const timer = setTimeout(fetchPizzas, 1000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<div className="App">
			<div className="wrapper">
				<Header />
				<main className="content">
					<div className="container">
						<div className="content__top">
							<Categories />
							<Sort />
						</div>
						<h2 className="content__title">Все пиццы</h2>
						<div className="content__items">
							{loading ? (
								<p style={{ textAlign: 'center', width: '100%' }}>Loading...</p>
							) : (
								<>
									{pizzas.map((pizza) => (
										<Pizza key={pizza.id} {...pizza} />
									))}
								</>
							)}
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default App;
