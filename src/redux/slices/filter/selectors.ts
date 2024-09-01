import { RootState } from "../../store";

export const selectFilter = (state: RootState) => state.filter;
export const selectSearchValue = (state: RootState) => state.filter.searchValue;
export const selectSortOption = (state: RootState) => state.filter.sortOption;
export const selectActiveCategory = (state: RootState) => state.filter.activeCategory;