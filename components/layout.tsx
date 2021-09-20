import Head from 'next/head';
import Header from './header';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Head>
				<title>Roshen Nair</title>
			</Head>
			<Header />
			<main>
				{children}
			</main>
		</>
	)
}

export default Layout;