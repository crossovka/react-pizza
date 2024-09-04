import { ReactNode } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const mainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className="App">
			<div className="wrapper">
				<Header />
				<main className="content">
					{children}
				</main>
				<Footer />
			</div>
		</div>
	);
};

export default mainLayout;
