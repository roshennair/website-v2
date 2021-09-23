import Image from 'next/image';
import Button from './button';

type Project = {
	img: string;
	title: string;
	description: string;
	demo: string;
	code: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
	const { img, title, description, demo, code } = project;

	return (
		<div
			className="
				rounded-xl
				shadow-md
				overflow-hidden
				hover:scale-105
				hover:shadow-xl
				transition
				duration-150
			"
		>
			<div className="relative h-52">
				<Image src={img} alt={title} layout="fill" objectFit="cover" />
			</div>
			<div className="flex flex-col p-6">
				<div className="leading-8">
					<div className="text-xl font-bold">{title}</div>
					<div className="text-lg mt-4">{description}</div>
				</div>
				<div className="flex mt-8 mb-3">
					<div className="mr-4">
						<Button text="Demo" href={demo} newTab />
					</div>
					<div>
						<Button text="Code" href={code} newTab />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard;