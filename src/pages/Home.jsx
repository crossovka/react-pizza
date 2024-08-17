import { useState, useEffect } from 'react';
import axios from 'axios';

import Categories from '../components/Categories/';
import Sort from '../components/Sort';
import Pizza from '../components/Pizza/';
import PizzaSkeleton from '../components/Pizza/skeleton.jsx';

export default function Home() {
	const [pizzas, setPizzas] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	];
	const [activeCategory, setActiveCategory] = useState(0);

	const [activeSortType, setActiveSortType] = useState({
		name: 'популярности (Asc)',
		sortProperty: 'rating',
	});

	useEffect(() => {
		setIsLoading(true);

		const fetchPizzas = async () => {
			const sortBy = activeSortType.sortProperty;
			const category = activeCategory > 0 ? `&category=${activeCategory}` : '';

			try {
				const response = await axios.get(
					`https://015079367f53b5d9.mokky.dev/pizzas?${category}&sortBy=${sortBy}`
				);
				setPizzas(response.data);
			} catch (error) {
				console.error('Error fetching the pizzas data', error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchPizzas();
		// FIXME
		// window.scrollTo(0, 0);
	}, [activeCategory, activeSortType]);

	return (
		<>
			<div className="content__top">
				<Categories
					categories={categories}
					activeCategory={activeCategory}
					setActiveCategory={setActiveCategory}
				/>
				<Sort
					activeSortType={activeSortType}
					setActiveSortType={setActiveSortType}
				/>
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
