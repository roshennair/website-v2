import { GetStaticProps, NextPage } from 'next';
import { getProjects } from '../lib/projects';
import { getSocials } from '@lib/socials';
import Project from '../types/project';
import Social from 'types/social';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Experience from '../components/experience';
import Projects from '../components/projects';
import Contact from 'components/contact';

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
	const projects = await getProjects(preview);
	const socials = await getSocials(preview);

	return {
		props: {
			projects,
			socials
		}
	}
}

const Home: NextPage<{ projects: Project[], socials: Social[] }> = ({ projects, socials }) => {
	return (
		<Layout>
			<Hero />
			<Experience />
			<Projects projects={projects} />
			<Contact socials={socials} />
		</Layout>
	);
}

export default Home;