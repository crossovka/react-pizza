import { usePizzas } from '../hooks/usePizzas';

import { Categories, Sort, Pagination} from '../components';

import { pizzasCategories } from '../constants';

const Home: React.FC = function () {
	const {renderPizzas, totalPages, currentPage, activeCategory, sortOption, handleCategorySelect, handlePageChange,} = usePizzas();

	return (
		<div className="container">
			<div className="content__top">
				<Categories
					categories={pizzasCategories}
					activeCategory={activeCategory}
					onCategorySelect={handleCategorySelect}
				/>
				<Sort sortOption={sortOption}/>
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">{renderPizzas()}</div>
			{totalPages > 0 && (
				<Pagination
					onChangePage={handlePageChange}
					totalPages={totalPages}
					currentPage={currentPage}
				/>
			)}
		</div>
	);
};

export default Home;