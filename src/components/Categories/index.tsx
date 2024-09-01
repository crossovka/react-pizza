type CategoryProps = {
	categories: string[];
	activeCategory: number;
	onCategorySelect: (i: number) => void;
};

const Categories: React.FC<CategoryProps> = ({ categories, activeCategory, onCategorySelect }) => {
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
};

export default Categories;
