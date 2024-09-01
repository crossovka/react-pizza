import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
// import slugify from 'slugify';

import Layout from './Layouts/Layout';

const PizzaPage: React.FC = () => {
	const [pizza, setPizza] = useState<{
		id: number;
		imgUrl: string;
		title: string;
		description: string;
		price: number;
		types: number[];
		sizes: number[];
		category: number;
		rating: number;
	}>();

	const { id } = useParams();
	const navigate = useNavigate();
	// const location = useLocation();
	// console.log(location);
	// const slug = slugify(title, { lower: true, remove: /[*+~.()'"!:@]/g });

	useEffect(() => {
		async function fetchPizza() {
			try {
				const { data } = await axios.get(
					`https://015079367f53b5d9.mokky.dev/pizzas?id=${id}`
				);
				if (data.length > 0) {
					setPizza(data[0]);
				} else {
					alert('pizza not found');
					navigate('/not-found');
				}
			} catch (error) {
				alert('error fetching pizza!');
				navigate('/');
			}
		}

		fetchPizza();
	}, []);
	
	return (
		<Layout>
			{!pizza ? (
				<h2>Загрузка...</h2>
			) : (
				<>
					<h2>{pizza.title}</h2>
					<img
						src={pizza.imgUrl}
						alt={pizza.title}
						style={{ width: '200px', height: '200px' }}
					/>
					<p>{pizza.description}</p>
					<span>{pizza.price} ₽</span>
					<Link to="/" className="button button--outline">
						Назад
					</Link>
				</>
			)}
		</Layout>
	);
};

export default PizzaPage;
