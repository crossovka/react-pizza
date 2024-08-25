import MainLayout from './pages/Layouts/MainLayout';
import Home from './pages/Home';

import './scss/app.scss';

function App() {
	return (
		<MainLayout>
			<Home />
		</MainLayout>
	);
}

export default App;