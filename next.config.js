const STUDIO_REWRITE = {
	source: "/studio/:path*",
	destination:
		process.env.NODE_ENV === "development"
			? "http://localhost:3333/backend/:path*"
			: "/backend/index.html",
};

/** @type {import('next').NextConfig} */
module.exports = {
	images: {
		domains: ['cdn.sanity.io']
	},
	reactStrictMode: true,
	rewrites: () => [STUDIO_REWRITE],
}
