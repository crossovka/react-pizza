import ContentLoader from 'react-content-loader';

const PizzaSkeleton = () => (
	<ContentLoader
		viewBox="0 0 280 490"
		height={490}
		width={280}
		speed={2}
		primarycolor="#f3f3f3"
		secondarycolor="#ecebeb"
	>
		<circle cx="134 " cy="136 " r="125 " />
		<rect x="0" y="296" rx="10" ry="10" width="280" height="24" />
		<rect x="0" y="345" rx="10" ry="10" width="280" height="88" />
		<rect x="0" y="453" rx="10" ry="10" width="95" height="30" />
		<rect x="125" y="446" rx="24" ry="24" width="152" height="45" />
	</ContentLoader>
);

export default PizzaSkeleton;
