import { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';

import {setCurrentPage, setActiveCategory} from '../redux/slices/filter/slice';
import { selectFilter } from '../redux/slices/filter/selectors';
import { selectPizzasData } from '../redux/slices/pizzas/selectors';
import { fetchPizzas } from '../redux/slices/pizzas/asyncActions';
import { Pizza as PizzaType } from '../redux/slices/pizzas/types';

import PizzaSkeleton from '../components/Pizza/skeleton';
import Pizza from '../components/Pizza';

export const usePizzas = () => {
	// const dispatch = useDispatch();
	// const dispatch: AppDispatch = useDispatch();
	const dispatch = useAppDispatch();

	const { activeCategory, searchValue, sortOption, currentPage } = useSelector(selectFilter);
	const { pizzas, status, isLoading, itemsPerPage, totalPages } = useSelector(selectPizzasData);

	useEffect(() => {
		dispatch(
			fetchPizzas({itemsPerPage, currentPage, activeCategory, sortOption, searchValue})
		);
	}, [currentPage, activeCategory, sortOption, searchValue]);

	const handleCategorySelect = useCallback(
		(i: number) => {
			if (activeCategory !== i) {
				dispatch(setActiveCategory(i));
				dispatch(setCurrentPage(1));
			}
		},
		[activeCategory, dispatch]
	);

	const handlePageChange = (page: number) => {
		dispatch(setCurrentPage(page));
	};

	const renderPizzas = (): JSX.Element[] => {
		if (status === 'error') {
			return [
				<div className="content__error-info" key="error">
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

		return pizzas.map((pizza: PizzaType) => (
			<Pizza key={pizza.id} {...pizza} />
		));
	};

	return {renderPizzas, totalPages, currentPage, activeCategory, handleCategorySelect, handlePageChange,};
};