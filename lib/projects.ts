import { groq } from 'next-sanity';
import Project from 'types/project';
import { getClient, urlFor } from './sanity';

type ProjectsQueryResult = {
	code: string;
	createdAt: string;
	demo: string;
	description: string;
	id: string;
	imgRef: string;
	title: string;
}[];

export const getProjects = async (preview: boolean = false) => {
	const query = groq`
		*[_type == "project"] | order(_createdAt desc) {
			"createdAt": _createdAt,
			"id": _id,
			code,
			demo,
			description,
			title,
			"imgRef": img.asset._ref
		}
	`;

	const result: ProjectsQueryResult = await getClient(preview).fetch(query);

	const projects: Project[] = result.map(project => {
		const { code, createdAt, demo, description, id, imgRef, title } = project;
		const img = urlFor(imgRef).url()!;

		return { code, createdAt, demo, description, id, img, title };
	});

	return projects;
}