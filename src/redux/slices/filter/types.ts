export enum SortPropertyEnum {
	RATING_DESC = '-rating',
	RATING_ASC = 'rating',
	PRICE_DESC = '-price',
	PRICE_ASC = 'price',
	TITLE_DESC = '-title',
	TITLE_ASC = 'title',
}

export type SortItemType = {
	name: string;
	sortProperty: SortPropertyEnum; // 'rating' | 'price' | 'title' | '-rating' | '-price' | '-title'
};

export interface FilterSliceState {
	activeCategory: number;
	searchValue: string;
	// sortOption: { name: string; sortProperty: string };
	sortOption: SortItemType;
	currentPage: number;
}