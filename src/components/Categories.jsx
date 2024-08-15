import { useState, useCallback } from 'react';

import categoriesData from '../data/categories';

function Categories() {
	const [activeCategory, setActiveCategory] = useState(categoriesData[0]);

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
				{categoriesData.map(({ id, category }) => (
					<li
						key={id}
						className={activeCategory === category ? 'active' : ''}
						// without an anonymous function, setActiveCategory will be called at the first render,
						// it will change the value and the component will be rendered in one. in sum to many renders
						onClick={() => HandleCategorySelect(category)}
					>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Categories;
