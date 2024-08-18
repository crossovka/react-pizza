import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

export const Pagination = ({ onChangePage, totalPages, currentPage }) => {
	return (
		<ReactPaginate
			className={styles.root}
			breakLabel="..."
			nextLabel=">"
			previousLabel="<"
			onPageChange={(event) => onChangePage(event.selected + 1)}
			pageRangeDisplayed={8}
			pageCount={Math.ceil(totalPages)}
			forcePage={currentPage - 1}
		/>
	);
};

export default Pagination;