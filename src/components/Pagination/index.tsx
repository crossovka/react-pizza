import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

type PaginationProps = {
	onChangePage: (pageIndex: number) => void;
	totalPages: number;
	currentPage: number;
};

const Pagination: React.FC<PaginationProps> = ({ onChangePage, totalPages, currentPage }) => (
		<ReactPaginate
			className={styles.root}
			breakLabel="..."
			nextLabel=">"
			previousLabel="<"
			// onPageChange={({ selected }: { selected: number }) => onChangePage(selected + 1)}
			onPageChange={(e) => onChangePage(e.selected + 1)}
			pageRangeDisplayed={8}
			pageCount={totalPages}
			forcePage={currentPage - 1}
		/>
);

export default Pagination;