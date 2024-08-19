import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory } from '../redux/slices/filterSlice';
// import { setSearchValue } from '../redux/slices/searchSlice';

import Categories from '../components/Categories/';
import Sort from '../components/Sort';
import Pizza from '../components/Pizza/';
import PizzaSkeleton from '../components/Pizza/skeleton.jsx';
import Pagination from '../components/Pagination';

export default function Home() {
	const dispatch = useDispatch();
	const activeCategory = useSelector(
		(state) => state.filterSlice.activeCategory
	);
	const sortOptions = useSelector((state) => state.sortSlice.sortOptions);
	const searchValue = useSelector((state) => state.searchSlice.searchValue);

	const [isLoading, setIsLoading] = useState(true);
	const [pizzas, setPizzas] = useState([]);
	const [totalPages, setTotalPages] = useState();
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 4;

	useEffect(() => {
		setIsLoading(true);

		const fetchPizzas = async () => {
			const search = searchValue ? `&title=*${searchValue}*` : '';
			const sortBy = sortOptions.sortProperty;
			const category = activeCategory > 0 ? `&category=${activeCategory}` : '';

			try {
				const response = await axios.get(
					`https://015079367f53b5d9.mokky.dev/pizzas?page=${currentPage}&limit=${itemsPerPage}${category}&sortBy=${sortBy}${search}`
				);
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
	}, [searchValue, activeCategory, sortOptions, currentPage]);

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
					activeCategory={activeCategory}
					setActiveCategory={(index) => dispatch(setActiveCategory(index))}
				/>
				<Sort />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{isLoading ? pizzasSkeleton : renderedPizzas}
			</div>
			<Pagination
				onChangePage={(page) => setCurrentPage(page)}
				totalPages={totalPages}
				currentPage={currentPage}
			/>
		</>
	);
}
