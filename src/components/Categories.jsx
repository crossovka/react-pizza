import { useState, useCallback } from 'react';

const categoriesData = [
	'Все',
	'Мясные',
	'Вегетарианская',
	'Гриль',
	'Острые',
	'Закрытые',
];

function Categories() {
	const [activeCategory, setActiveCategory] = useState(categoriesData[0]);

	console.log(`Рендер ${activeCategory}`);

	// Now the handleClick function is created only once and is used at each render until the dependencies
	// (in this case, an empty activeCategory) are changed.

	// useCallback is used to memoize the handleCategoryClick function
	const HandleCategoryClick = useCallback(
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
				{categoriesData.map((category, index) => (
					<li
						key={index}
						className={activeCategory === category ? 'active' : ''}
						// without an anonymous function, setActiveCategory will be called at the first render,
						// it will change the value and the component will be rendered in one. in sum to many renders
						onClick={() => HandleCategoryClick(category)}
					>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Categories;
