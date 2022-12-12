import Quote from '../components/Quote';
import Clock from '../components/Clock';
import ButtonMore from '../components/ButtonMore';

const Home = () => {
	return (
		<>
			<Quote />
			<section className="clock">
				<Clock />
				<ButtonMore />
			</section>
		</>
	);
};

export default Home;
