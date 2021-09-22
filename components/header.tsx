import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<header className="flex justify-between mx-auto px-10 py-6">
			<div>
				<Link href="/">
					<a className="text-lg font-bold">
						RN
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
										<Link href="/#experience">
											<a className="block w-full" onClick={() => setShowMenu(false)}>Experience</a>
										</Link>
									</li>
									<li className="py-1 text-right">
										<Link href="/#projects">
											<a className="block w-full" onClick={() => setShowMenu(false)}>Projects</a>
										</Link>
									</li>
									<li className="py-1 text-right">
										<Link href="/#contact">
											<a className="block w-full" onClick={() => setShowMenu(false)}>Contact</a>
										</Link>
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
					<li className="ml-10">
						<Link href="/#experience">
							<a>Experience</a>
						</Link>
					</li>
					<li className="ml-10">
						<Link href="/#projects">
							<a>Projects</a>
						</Link>
					</li>
					<li className="ml-10">
						<Link href="/#contact">
							<a>Contact</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;