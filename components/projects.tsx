import ProjectCard from "./project-card";

const Projects = () => {
	const project = {
		img: '/images/node.png',
		title: 'Project 1',
		description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum blanditiis architecto ab deserunt dolorum earum sed in sunt ullam error?',
		demo: 'https://github.com/roshennair',
		code: 'https://github.com/roshennair'
	}

	return (
		<section id="projects" className="py-10 px-8 sm:p-16">
			<h2 className="text-4xl font-bold">
				Projects
			</h2>
			<p className="pt-5 text-lg leading-8">
				Here are some personal projects I've developed:
			</p>
			<div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-10">
				<ProjectCard project={project} />
				<ProjectCard project={project} />
				<ProjectCard project={project} />
			</div>
		</section>
	);
}

export default Projects;