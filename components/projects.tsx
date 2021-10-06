import Project from "types/project";
import ProjectCard from "./project-card";

const Projects = ({ projects }: { projects: Project[] }) => {
	return (
		<section id="projects" className="section">
			<h2 className="text-4xl font-bold">
				Projects
			</h2>
			<p className="pt-5 text-lg leading-8">
				Here are some personal projects I&apos;ve developed:
			</p>
			<div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-10">
				{
					projects.map(project => <ProjectCard key={project.id} project={project} />)
				}
			</div>
		</section>
	);
}

export default Projects;