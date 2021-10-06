import Head from 'next/head';
import Footer from './footer';
import Header from './header';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Head>
				<title>Roshen Nair</title>
			</Head>
			<Header />
			<main className="max-w-5xl mx-auto">
				{children}
			</main>
			<Footer />
		</>
	)
}

export default Layout;