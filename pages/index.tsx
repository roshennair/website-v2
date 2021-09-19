import { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/header';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Roshen Nair</title>
			</Head>
			<Header />
		</div>
	);
}

export default Home;