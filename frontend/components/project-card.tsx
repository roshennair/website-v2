import Image from 'next/image';
import Project from '../types/project';
import Button from './button';

const ProjectCard = ({ project }: { project: Project }) => {
	const { title, description, demo, code } = project;
	const img = process.env.NEXT_PUBLIC_API_URL + project.img.url;

	return (
		<div
			className="
				rounded-xl
				shadow-md
				overflow-hidden
				hover:shadow-xl
				hover:scale-105
				transition
				duration-200
			"
		>
			<div className="relative h-52">
				<Image src={img} alt={title} layout="fill" objectFit="cover" />
			</div>
			<div className="flex flex-col justify-between p-6">
				<div className="leading-8">
					<div className="text-xl font-bold">{title}</div>
					<div className="text-lg mt-4">
						{
							description.length > 200
								? `${description.substr(0, 197)}...`
								: description
						}
					</div>
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