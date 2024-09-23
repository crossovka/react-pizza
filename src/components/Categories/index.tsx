import { memo } from 'react';

type CategoryProps = {
	categories: string[];
	activeCategory: number;
	onCategorySelect: (i: number) => void;
};

export const Categories: React.FC<CategoryProps> = memo(({ categories, activeCategory, onCategorySelect }) => {
	// useWhyDidYouUpdate('Categories', { categories, activeCategory, onCategorySelect});
	
	return (
		<div className="categories">
			<ul>
				{categories.map((category, i) => (
					<li
						key={i}
						className={activeCategory === i ? 'active' : ''}
						onClick={() => onCategorySelect(i)}
					>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
}
);