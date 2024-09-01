import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setActiveSortType } from '../redux/slices/filter/slice';
import { selectSortOption } from '../redux/slices/filter/selectors';
import { SortItemType } from '../redux/slices/filter/types';

import { sortList } from '../constants';

const Sort = () => {
	const dispatch = useDispatch();
	const sortOption: SortItemType = useSelector(selectSortOption);

	const sortRef = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(false);

	const handleSelectSort = (sortProperty: string): void => {
		if (sortOption.sortProperty !== sortProperty) {
			const selectedOption = sortList.find(
				(option) => option.sortProperty === sortProperty
			);
			// if (selectedOption) {
			// 	dispatch(setActiveSortType(selectedOption));
			// }
			dispatch(setActiveSortType(selectedOption));
			setIsOpen(false);
		}
	};

	/**
	 * Handles a click outside of the sort dropdown menu.
	 *
	 * @param e The event to process.
	 */
	const handleClickOutside = (e: MouseEvent): void => {
		if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.body.addEventListener('click', handleClickOutside, true);
		return () =>
			document.body.removeEventListener('click', handleClickOutside, true);
	}, []);

	return (
		<div ref={sortRef} className="sort">
			<div className="sort__label">
				<svg
					width="10"
					height="6"
					viewBox="0 0 10 6"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className={isOpen ? 'rotated' : ''}
				>
					<path
						d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
						fill="#2C2C2C"
					/>
				</svg>
				<b>Сортировка по:</b>
				<div className="sort__popup-wrap">
					<span onClick={() => setIsOpen(!isOpen)}>{sortOption.name}</span>
					<div className={`sort__popup ${isOpen ? 'active' : ''}`}>
						<ul>
							{sortList.map((obj) => (
								<li
									key={obj.sortProperty}
									onClick={() => handleSelectSort(obj.sortProperty)}
									className={
										sortOption.sortProperty === obj.sortProperty ? 'active' : ''
									}
								>
									{obj.name}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sort;
