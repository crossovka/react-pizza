import ContentLoader from 'react-content-loader';

const CategorySkeleton = () => (
	<ContentLoader
		speed={2}
		width={100}
		height={50}
		viewBox="0 0 100 50"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
	>
		<rect x="0" y="0" rx="30" ry="30" width="100" height="50" />
	</ContentLoader>
);

export default CategorySkeleton;
