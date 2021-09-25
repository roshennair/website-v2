export default {
	name: "social",
	title: "Social Platforms",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Social platform name",
			type: "string",
			validation: Rule => Rule.required()
		},
		{
			name: 'slug',
			title: 'Social platform slug',
			type: 'slug',
			options: {
				source: 'name',
				slugify: input => input.toLowerCase().replace(/\s+/g, '-')
			}
		},
		{
			name: "url",
			title: "Social platform URL",
			type: "url",
			validation: Rule => Rule.required().uri({
				scheme: ['http', 'https', 'mailto']
			})
		}
	],

	preview: {
		select: {
			title: 'name',
			date: '_createdAt',
			url: 'url'
		}
	}
};
