import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addProduct } from '../../redux/slices/cartSlice.js';

const pizzaTypes = ['тонкое', 'традиционное'];

function Pizza({ id, imgUrl, title, types, sizes, category, price }) {
	const dispatch = useDispatch();
	const cartProduct = useSelector((state) =>
		state.cartSlice.products.find((obj) => obj.id === id)
	);
	const addedCount = cartProduct ? cartProduct.count : 0;

	const [activeType, setActiveType] = useState(types[0]);
	const [activeSize, setActiveSize] = useState(0);

	const onClickAdd = () => {
		const product = {
			id,
			title,
			price,
			imgUrl,
			type: pizzaTypes[activeType],
			size: sizes[activeSize],
		};
		dispatch(addProduct(product));
	};

	const HandleSizeSelect = useCallback(
		(i) => {
			if (activeSize !== i) {
				setActiveSize(i);
			}
		},
		[activeSize]
	);

	return (
		<div className="pizza-block">
			<img className="pizza-block__image" src={imgUrl} alt="Pizza" />
			{/* <a href='' className="pizza-block__title">{title}</a> */}
			<Link
				to={{
					pathname: `/pizza/${id}`,
					state: { title },
				}}
				className="pizza-block__title"
			>
				{title}
			</Link>
			<div>
				<div className="pizza-block__selector">
					<ul>
						{types.map((typeI) => (
							<li
								key={typeI}
								className={activeType === typeI ? 'active' : ''}
								onClick={() => setActiveType(typeI)}
							>
								{pizzaTypes[typeI]}
							</li>
						))}
					</ul>
					<ul>
						{sizes.map((size, i) => (
							<li
								key={i}
								className={activeSize === i ? 'active' : ''}
								onClick={() => HandleSizeSelect(i)}
							>
								{size} см.
							</li>
						))}
					</ul>
				</div>
				<div className="pizza-block__bottom">
					<div className="pizza-block__price">
						<span>от {price} ₽</span>
					</div>
					<button
						onClick={() => onClickAdd()}
						type="button"
						className="button button--outline button--add"
					>
						<svg
							width="12"
							height="12"
							viewBox="0 0 12 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
								fill="white"
							/>
						</svg>
						<span>Добавить</span>
						{/* {addedCount > 0 && <i>{addedCount}</i>} */}
						{addedCount ? <i>{addedCount}</i> : <i>0</i>}
					</button>
				</div>
			</div>
		</div>
	);
}

export default Pizza;
