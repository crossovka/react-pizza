import { useState, useRef, useCallback, useEffect } from 'react';
import debounce from 'lodash.debounce';

import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filter/slice';
import { selectSearchValue } from '../../redux/slices/filter/selectors';

import searchIcon from '../../assets/img/search.svg';
import clearIcon from '../../assets/img/cansel.svg';
import styles from './Search.module.scss';

export const Search: React.FC = () => {
	const dispatch = useDispatch();
	const searchValue: string = useSelector(selectSearchValue);
	const inputRef = useRef<HTMLInputElement>(null);
	const [localSearchValue, setLocalSearchValue] = useState<string>(searchValue);

	const debouncedSetSearchValue = useCallback(
		debounce((str) => dispatch(setSearchValue(str)), 600),[dispatch]
	);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const value = e.target.value;
		setLocalSearchValue(value);
		debouncedSetSearchValue(value);
	};

	/**
	 * Cancels the current search query and clears the input field then focuses on it.
	 */
	const handleSearchClear = (): void => {
		setLocalSearchValue('');
		dispatch(setSearchValue(''));
		debouncedSetSearchValue.cancel();
		inputRef.current?.focus();
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
					onClick={handleSearchClear}
					className={styles.clearIcon}
					src={clearIcon}
					alt="Очистить поле поиска"
				/>
			)}
		</div>
	);
};

export default Search;