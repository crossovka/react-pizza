import { Link } from 'react-router-dom';

import notFound from '../../assets/img/notFound.svg';
import styles from './styles.module.scss';

const NotFoundBlock = () => {
	return (
		<div className={styles['not-found']}>
			<h1 className={styles['not-found__title']}>Page not found</h1>
			<img className={styles['not-found__img']} src={notFound} alt="Trash" />
			<Link className={styles['not-found__link']} to="/">
				back home
			</Link>
		</div>
	);
};

export default NotFoundBlock;
