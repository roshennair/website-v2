import Image from 'next/image';
import Project from 'types/project';
import ButtonLink from './button-link';

const ProjectCard = ({ project }: { project: Project }) => {
	const { img, title, description, demo, code } = project;

	return (
		<div
			className="rounded shadow-md overflow-hidden hover:shadow-xl transition duration-200"
		>
			<div className="relative h-52">
				<Image src={img} layout="fill" objectFit="cover" alt={title} />
			</div>
			<div className="flex flex-col p-6 h-60 justify-between">
				<div className="leading-8">
					<div className="text-xl font-bold">{title}</div>
					<div
						className="
							text-lg
							mt-4
							line-clamp-2
							lg:line-clamp-3
						"
					>
						{description}
					</div>
				</div>
				<div className="flex mt-8 mb-3">
					<div className="mr-4">
						<ButtonLink text="Demo" href={demo} newTab />
					</div>
					<div>
						<ButtonLink text="Code" href={code} newTab />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard;