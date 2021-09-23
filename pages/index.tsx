import { GetStaticProps, NextPage } from 'next';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Experience from '../components/experience';
import Projects from '../components/projects';
import { getProjects } from '../lib/projects';
import Project from '../types/project';

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
	const projects = await getProjects(preview);

	return {
		props: {
			projects
		}
	}
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