import { NextPage } from 'next';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Experience from '../components/experience';
import Projects from '../components/projects';

const Home: NextPage = () => {
	return (
		<Layout>
			<Hero />
			<Experience />
			<Projects />
		</Layout>
	);
}

export default Home;