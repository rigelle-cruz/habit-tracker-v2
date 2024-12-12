import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
	const navigate = useNavigate();
	function goTo(link: string) {
		navigate(link);
	}

	return (
		<div className="home-screen">
			<img
				onClick={() => goTo(`/habit-list`)}
				src="/images/pixel-heart.png"
				alt="Click to habits"
				className="clickable-asset"
			/>
			<h1>Click to View List!</h1>
		</div>
	);
};

export default HomeScreen;
