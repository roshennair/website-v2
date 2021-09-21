import Button from "./button";

const Hero = () => {
	return (
		<section className="p-10 sm:p-16">
			<div>
				<h1 className="text-6xl font-bold">Roshen Nair</h1>
				<h2 className="text-2xl font-medium mt-6">
					Software engineer | Web developer | CS student
				</h2>
				<div className="mt-10">
					<Button text="Projects" href="#projects" />
					<Button text="Resume" href="/docs/resume.pdf" newTab />
				</div>
			</div>
			<div></div>
		</section>
	)
}

export default Hero;