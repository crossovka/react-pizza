import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import Pizza from './components/Pizza';

const pizzaData = [
	{
		title: 'Маргарита',
		price: 400,
	},
	{
		title: 'Пепперони',
		price: 600,
	},
	{
		title: 'Четыре нарезника',
		price: 700,
	},
	{
		title: 'Аль Капоне',
		price: 800,
	},
];

function App() {
	return (
		<div className="App">
			<div className="wrapper">
				<Header />
				<div className="content">
					<div className="container">
						<div className="content__top">
							<Categories />
							<Sort />
						</div>
						<h2 className="content__title">Все пиццы</h2>
						<div className="content__items">
							{pizzaData.map((pizza) => (
								<Pizza
									key={pizza.title}
									title={pizza.title}
									price={pizza.price}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
