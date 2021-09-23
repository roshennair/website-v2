import { GetStaticProps, NextPage } from 'next';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Experience from '../components/experience';
import Projects from '../components/projects';
import Project from '../types/project';
import { fetchProjects } from '../lib/projects';

export const getStaticProps: GetStaticProps = async () => {
	const projects = await fetchProjects();

	return { props: { projects } }
}

const Home: NextPage<{ projects: Project[] }> = ({ projects }) => {
	return (
		<Layout>
			<Hero />
			<Experience />
			<Projects projects={projects} />
		</Layout>
	);
}

export default Home;