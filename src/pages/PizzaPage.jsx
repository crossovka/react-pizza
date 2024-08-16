import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Layout from './Layout';

const PizzaPage = () => {
	const { id } = useParams();
	const location = useLocation();
	const { title } = location.state || { title: 'Пицца' };

	return (
		<Layout>
			<h1>{title}</h1>
			<p>ID пиццы: {id}</p>
		</Layout>
	);
};

export default PizzaPage;