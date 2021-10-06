import ButtonLink from "./button-link";
import { ChevronDownIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const Hero = () => {
	return (
		<section id="hero" className="section h-screen relative">
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
			<Link href="#experience">
				<a className="cursor-pointer absolute bottom-10 md:bottom-20 animate-bounce">
					<ChevronDownIcon className="h-10" />
				</a>
			</Link>
		</section>
	)
}

export default Hero;