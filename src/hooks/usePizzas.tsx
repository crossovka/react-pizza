import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentPage, setActiveCategory } from '../redux/slices/filter/slice.js';
import { selectFilter } from '../redux/slices/filter/selectors.js';
import { selectPizzasData } from '../redux/slices/pizzas/selectors.js';
import { fetchPizzas} from '../redux/slices/pizzas/asyncActions.js';

import Pizza from '../components/Pizza/index.js';
import PizzaSkeleton from '../components/Pizza/skeleton.jsx';

export const usePizzas = () => {
	const dispatch = useDispatch();
	const { activeCategory, searchValue, sortOption, currentPage } = useSelector(selectFilter);
	const { pizzas, status, isLoading, itemsPerPage, totalPages } = useSelector(selectPizzasData);

	useEffect(() => {
		dispatch(
			fetchPizzas({
				itemsPerPage,
				currentPage,
				activeCategory,
				sortOption,
				searchValue,
			})
		);
	}, [currentPage, activeCategory, sortOption, searchValue]);

	const handleCategorySelect = useCallback(
		(i: number) => {
			if (activeCategory !== i) {
				dispatch(setActiveCategory(i));
				dispatch(setCurrentPage(1));
			}
		},
		[activeCategory]
	);

	const handlePageChange = (page: number) => {
		dispatch(setCurrentPage(page));
	};

	const renderPizzas = (): JSX.Element[] => {
		if (status === 'error') {
			return [
				<div className="content__error-info">
					<h2>Произошла ошибка 😕</h2>
					<p>
						К сожалению, не удалось получить пиццы. Попробуйте повторить попытку
						позже.
					</p>
				</div>,
			];
		}

		if (isLoading) {
			return [...new Array(itemsPerPage)].map((_, i) => (
				<PizzaSkeleton key={i} />
			));
		}
		// key={obj.id}
		return pizzas.map((pizza) => <Pizza key={pizza.id} {...pizza} />);
	};

	return {
		renderPizzas,
		totalPages,
		currentPage,
		activeCategory,
		handleCategorySelect,
		handlePageChange,
	};
};