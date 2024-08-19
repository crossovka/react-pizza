import React, { useState } from 'react';

import Layout from './pages/Layout';

import Home from './pages/Home';

import './scss/app.scss';

export const SearchContext = React.createContext('');

function App() {
	const [searchValue, setSearchValue] = useState('');

	return (
		<SearchContext.Provider value={{searchValue, setSearchValue}}>
			<Layout>
				<Home />
			</Layout>
		</SearchContext.Provider>
	);
}

export default App;
