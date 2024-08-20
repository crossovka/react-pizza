import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	setActiveCategory,
	setCurrentPage,
} from '../../redux/slices/filterSlice';

import CategorySkeleton from './skeleton.jsx';

function Categories() {
	const dispatch = useDispatch();
	const activeCategory = useSelector(
		(state) => state.filterSlice.activeCategory
	);
	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	];

	const handleCategorySelect = useCallback(
		(index) => {
			if (activeCategory !== index) {
				dispatch(setActiveCategory(index));
				dispatch(setCurrentPage(1));
			}
		},
		[activeCategory, dispatch]
	);

	return (
		<div className="categories">
			<ul>
				{categories.map((category, i) => (
					<li
						key={i}
						className={activeCategory === i ? 'active' : ''}
						onClick={() => handleCategorySelect(i)}
					>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Categories;
