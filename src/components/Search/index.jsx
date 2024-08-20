import { useState, useRef, useCallback, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../redux/slices/searchSlice';

import searchIcon from '../../assets/img/search.svg';
import clearIcon from '../../assets/img/cansel.svg';
import styles from './Search.module.scss';

export const Search = () => {
	const dispatch = useDispatch();
	const searchValue = useSelector((state) => state.searchSlice.searchValue);
	const inputRef = useRef();
	const [localSearchValue, setLocalSearchValue] = useState(searchValue);

	const debouncedSetSearchValue = useCallback(
		debounce((str) => dispatch(setSearchValue(str)), 700),
		[dispatch]
	);

	const handleInputChange = (e) => {
		const value = e.target.value;
		setLocalSearchValue(value);
		debouncedSetSearchValue(value);
	};

	const handleClearSearch = () => {
		setLocalSearchValue('');
		dispatch(setSearchValue(''));
		debouncedSetSearchValue.cancel();
		inputRef.current.focus();
	};

	useEffect(() => {
		
		setLocalSearchValue(searchValue);
	}, [searchValue]);

	return (
		<div className={styles.root}>
			<img className={styles.icon} src={searchIcon} alt="Искать" />
			<input
				ref={inputRef}
				value={localSearchValue}
				onChange={handleInputChange}
				className={styles.input}
				placeholder="Поиск пиццы..."
			/>
			{localSearchValue && (
				<img
					onClick={handleClearSearch}
					className={styles.clearIcon}
					src={clearIcon}
					alt="Очистить поле поиска"
				/>
			)}
		</div>
	);
};

export default Search;
