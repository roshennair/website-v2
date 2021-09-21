import { NextPage } from 'next';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Experience from '../components/experience';

const Home: NextPage = () => {
	return (
		<Layout>
			<Hero />
			<Experience />
		</Layout>
	);
}

export default Home;