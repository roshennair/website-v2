import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div className="flex justify-between mx-auto px-10 py-6">
			<div>
				<Link href="/">
					<a>
						<h1 className="text-lg font-bold">Roshen Nair</h1>
					</a>
				</Link>
			</div>
			<div className="md:hidden">
				{showMenu
					? (
						<div className="flex flex-col items-end">
							<XIcon className="h-6 cursor-pointer" onClick={() => setShowMenu(false)} />
							<nav>
								<ul className="flex flex-col">
									<li className="pt-5 pb-1 text-right">
										<a className="block w-full" href="#experience" onClick={() => setShowMenu(false)}>Experience</a>
									</li>
									<li className="py-1 text-right">
										<a className="block w-full" href="#projects" onClick={() => setShowMenu(false)}>Projects</a>
									</li>
									<li className="py-1 text-right">
										<a className="block w-full" href="#contact" onClick={() => setShowMenu(false)}>Contact</a>
									</li>
								</ul>
							</nav>
						</div>
					)
					: <MenuIcon className="h-6 cursor-pointer" onClick={() => setShowMenu(true)} />
				}
			</div>
			<nav className="hidden md:block">
				<ul className="flex">
					<li className="ml-10"><a href="#experience">Experience</a></li>
					<li className="ml-10"><a href="#projects">Projects</a></li>
					<li className="ml-10"><a href="#contact">Contact</a></li>
				</ul>
			</nav>
		</div>
	);
}

export default Header;