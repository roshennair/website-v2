import TechLogo from "./tech-logo";

const Experience = () => {
	return (
		<section id="experience" className="section ">
			<h2 className="text-4xl font-bold">
				Experience
			</h2>
			<p className="pt-5 text-lg leading-8">
				As someone with over <strong>2 years of development experience</strong>, I&apos;m experienced in both front-end and back-end development.
				My specialization is in <strong>full-stack web development</strong>.
				Here are my favourite technologies to work with:
			</p>
			<div className="px-5 sm:px-0 py-10 grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
				<TechLogo title="TypeScript" src="/images/ts.svg" />
				<TechLogo title="React" src="/images/react.svg" />
				<TechLogo title="Tailwind CSS" src="/images/tailwind.svg" />
				<TechLogo title="Firebase" src="/images/firebase.svg" />
				<TechLogo title="Node.js" src="/images/node.svg" />
				<TechLogo title="PostgreSQL" src="/images/postgres.svg" />
			</div>
		</section>
	)
}

export default Experience;