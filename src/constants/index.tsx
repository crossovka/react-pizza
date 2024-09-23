export const pizzasCategories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые'];
// export const drinksCategories = ['Все', 'Газированные', 'Соки', 'Кофе', 'Чай'];

export const pizzaTypes = ['тонкое', 'традиционное'];

import { SortItemType, SortPropertyEnum } from "../redux/slices/filter/types";

export const sortList: SortItemType[] = [
	{ name: 'популярности (Asc)', sortProperty: SortPropertyEnum.RATING_ASC },
	{ name: 'популярности (Desc)', sortProperty: SortPropertyEnum.RATING_DESC },
	{ name: 'цене (Asc)', sortProperty: SortPropertyEnum.PRICE_ASC },
	{ name: 'цене (Desc)', sortProperty: SortPropertyEnum.PRICE_DESC },
	{ name: 'алфавиту (Asc)', sortProperty: SortPropertyEnum.TITLE_ASC },
	{ name: 'алфавиту (Desc)', sortProperty: SortPropertyEnum.TITLE_DESC },
];
