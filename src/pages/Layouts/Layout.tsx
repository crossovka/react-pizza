import { ReactNode } from 'react';
import Header from '../../components/Header';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className="App">
			<div className="wrapper">
				<Header />
				<main className="content">
					<div className="container">{children}</div>
				</main>
			</div>
		</div>
	);
};

export default Layout;