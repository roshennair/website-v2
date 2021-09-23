type Project = {
	id: number;
	title: string;
	description: string;
	demo: string;
	code: string;
	img: {
		url: string;
		[key: string]: any;
	},
	[key: string]: any;
};

export default Project;