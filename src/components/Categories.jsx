import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

function Categories() {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	const [activeCategory, setActiveCategory] = useState(categories[0]);

	useEffect(() => {
		console.log('Fetching categories...');
		const fetchCategories = async () => {
			try {
				const response = await axios.get('/data/categories.json');
				setCategories(response.data);
			} catch (error) {
				console.error('Error fetching the categories data', error);
			} finally {
				setLoading(false);
			}
		};
		const timer = setTimeout(fetchCategories, 500);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	// Now the handleClick function is created only once and is used at each render until the dependencies
	// (in this case, an empty activeCategory) are changed.

	// useCallback is used to memoize the handleCategoryClick function
	const HandleCategorySelect = useCallback(
		(category) => {
			if (activeCategory !== category) {
				setActiveCategory(category);
			}
		},
		[activeCategory]
	);
	// Dependencies are an empty array, which means at the first render
	// Add activeCategory as a dependency. now the handleCategoryClick function will be recreated only when the activeCategory changes

	return (
		<div className="categories">
			<ul>
				{loading ? (
					<div>Loading...</div>
				) : (
					categories.map((category, i) => (
						<li
							// if the array stays static, you can safely pass index into key
							key={i}
							// key={id}
							className={activeCategory === category ? 'active' : ''}
							// without an anonymous function, setActiveCategory will be called at the first render,
							// it will change the value and the component will be rendered in one. in sum to many renders
							onClick={() => HandleCategorySelect(category)}
						>
							{category}
						</li>
					))
				)}
			</ul>
		</div>
	);
}

export default Categories;
