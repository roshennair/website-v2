export default {
	name: "project",
	title: "Projects",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Project title",
			type: "string",
			validation: Rule => Rule.required()
		},
		{
			name: "description",
			description: "Write a short description of this project",
			title: "Project description",
			rows: 3,
			type: "text",
			validation: Rule => Rule.required().max(200)
		},
		{
			name: "img",
			title: "Project image",
			type: "image",
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alternative text",
					description: "Important for SEO and accessiblity.",
					options: {
						isHighlighted: true
					}
				}
			],
			validation: Rule => Rule.required(),
			options: {
				hotspot: true
			}
		},
		{
			name: "demo",
			title: "Project demo URL",
			type: "url",
			validation: Rule => Rule.required()
		},
		{
			name: "code",
			title: "Project code repo URL",
			type: "url",
			validation: Rule => Rule.required()
		}
	],

	preview: {
		select: {
			title: 'title',
			subtitle: 'description',
			media: 'img',
			date: '_createdAt'
		}
	}
};
