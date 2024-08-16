import { useState, useEffect } from 'react';
import axios from 'axios';

import Categories from '../components/Categories/index.jsx';
import Sort from '../components/Sort';
import Pizza from '../components/Pizza/';
import PizzaSkeleton from '../components/Pizza/skeleton.jsx';

export default function Home() {
	const [pizzas, setPizzas] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		console.log('Fetching pizzas...');
		const fetchPizzas = async () => {
			try {
				const response = await axios.get('/data/pizzas.json');
				setPizzas(response.data);
			} catch (error) {
				console.error('Error fetching the pizzas data', error);
			} finally {
				setIsLoading(false);
			}
		};

		const timer = setTimeout(fetchPizzas, 1500);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<>
			<div className="content__top">
				<Categories />
				<Sort />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{isLoading
					? [...new Array(8)].map((_, i) => <PizzaSkeleton key={i} />)
					: pizzas.map((pizza) => <Pizza key={pizza.id} {...pizza} />)}
			</div>
		</>
	);
}
