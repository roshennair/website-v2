import Project from "../types/project";

export const fetchProjects = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
	return await response.json() as Project[];
}