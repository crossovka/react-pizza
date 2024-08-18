import { useState, useEffect } from 'react';
import axios from 'axios';

import Categories from '../components/Categories/';
import Sort from '../components/Sort';
import Pizza from '../components/Pizza/';
import PizzaSkeleton from '../components/Pizza/skeleton.jsx';
import Pagination from '../components/Pagination';

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);
	const [pizzas, setPizzas] = useState([]);
	const [totalPages, setTotalPages] = useState();
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 4;

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
					`https://015079367f53b5d9.mokky.dev/pizzas?page=${currentPage}&limit=${itemsPerPage}${category}&sortBy=${sortBy}`
				);
				console.log(response.data.meta);
				setTotalPages(response.data.meta.total_pages);

				setPizzas(response.data.items);
			} catch (error) {
				console.error('Error fetching the pizzas data', error);
				setPizzas([]);
				setTotalPages(1);
			} finally {
				setIsLoading(false);
			}
		};
		fetchPizzas();
		// FIXME
		// window.scrollTo(0, 0);
	}, [activeCategory, activeSortType, totalPages, currentPage]);

	const pizzasSkeleton = [...new Array(itemsPerPage)].map((_, i) => (
		<PizzaSkeleton key={i} />
	));
	const renderedPizzas = pizzas.map((pizza) => (
		<Pizza key={pizza.id} {...pizza} />
	));

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
				{isLoading ? pizzasSkeleton : renderedPizzas}
			</div>
			<Pagination
				onChangePage={(Number) => setCurrentPage(Number)}
				totalPages={totalPages}
				currentPage={currentPage}
			/>
		</>
	);
}
