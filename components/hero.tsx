import ButtonLink from "./button-link";

const Hero = () => {
	return (
		<section id="hero" className="section h-screen">
			<div>
				<h1 className="text-6xl font-bold">Roshen Nair</h1>
				<h2 className="text-2xl font-medium mt-6">
					Software engineer | Web developer | CS student
				</h2>
				<div className="mt-10 flex">
					<div className="mr-8">
						<ButtonLink text="Projects" href="#projects" />
					</div>
					<div>
						<ButtonLink text="Resume" href="/docs/resume.pdf" newTab />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero;