import { usePizzas } from '../hooks/usePizzas';

import Categories from '../components/Categories/index.js';
import Sort from '../components/Sort.js';
import Pagination from '../components/Pagination/index.js';

import { pizzasCategories } from '../constants';

const Home: React.FC = function () {
	const {renderPizzas, totalPages, currentPage, activeCategory, handleCategorySelect, handlePageChange,} = usePizzas();

	return (
		<>
			<div className="content__top">
				<Categories
					categories={pizzasCategories}
					activeCategory={activeCategory}
					onCategorySelect={handleCategorySelect}
				/>
				<Sort />
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
		</>
	);
};

export default Home;