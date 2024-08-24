import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectFilter,
	setActiveCategory,
	setCurrentPage,
} from '../redux/slices/filterSlice';
import { selectPizzasData, fetchPizzas } from '../redux/slices/pizzasSlice';

import Categories from '../components/Categories/';
import Sort from '../components/Sort';
import Pizza from '../components/Pizza/';
import PizzaSkeleton from '../components/Pizza/skeleton.jsx';
import Pagination from '../components/Pagination';

export default function Home() {
	const dispatch = useDispatch();
	const { activeCategory, searchValue, sortOptions, currentPage } = useSelector(selectFilter);
	const { pizzas, status, isLoading, totalPages } = useSelector(selectPizzasData);

	const itemsPerPage = 4;

	useEffect(() => {
		dispatch(
			fetchPizzas({
				currentPage,
				itemsPerPage,
				activeCategory,
				sortOptions,
				searchValue,
			})
		);
	}, [
		dispatch,
		currentPage,
		itemsPerPage,
		activeCategory,
		sortOptions,
		searchValue,
	]);

	const renderPizzas = () => {
		if (status === 'error') {
			return (
				<div className="content__error-info">
					<h2>Произошла ошибка 😕</h2>
					<p>
						К сожалению, не удалось получить пиццы. Попробуйте повторить попытку
						позже.
					</p>
				</div>
			);
		}

		if (isLoading) {
			return [...new Array(itemsPerPage)].map((_, i) => (
				<PizzaSkeleton key={i} />
			));
		}

		return pizzas.map((pizza) => <Pizza key={pizza.id} {...pizza} />);
	};

	return (
		<>
			<div className="content__top">
				<Categories
					activeCategory={activeCategory}
					setActiveCategory={(index) => {
						dispatch(setActiveCategory(index));
						dispatch(setCurrentPage(1));
					}}
				/>
				<Sort />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">{renderPizzas()}</div>
			{totalPages > 0 && status !== 'error' && (
				<Pagination
					onChangePage={(page) => dispatch(setCurrentPage(page))}
					totalPages={totalPages}
					currentPage={currentPage}
				/>
			)}
		</>
	);
}
