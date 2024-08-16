import Header from '../components/Header';

const Layout = ({ children }) => {
	return (
		<div className="App">
			<div className="wrapper">
				<Header />
				<main className="content">
					<div className="container">{children}</div>
				</main>
				{/* <Footer /> */}
			</div>
		</div>
	);
};

export default Layout;
