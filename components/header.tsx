import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		document.addEventListener('scroll', () => setScroll(window.scrollY));
	});

	return (
		<header
			className={`
				w-full
				flex
				justify-between
				px-10
				py-5
				fixed
				bg-white
				z-10
				${scroll > 0 ? 'shadow-md' : ''}
			`}
		>
			<div>
				<Link href="#hero">
					<a className="text-2xl font-bold">
						RN
					</a>
				</Link>
			</div>
			<div className="md:hidden">
				{showMenu
					? (
						<div className="flex flex-col items-end relative">
							<XIcon className="h-8 cursor-pointer" onClick={() => setShowMenu(false)} />
							<nav className="absolute p-8 top-10 right-1 bg-white rounded shadow-lg">
								<ul className="flex flex-col">
									<li className="pb-4">
										<Link href="#experience">
											<a className="block w-full" onClick={() => setShowMenu(false)}>Experience</a>
										</Link>
									</li>
									<li className="pb-4">
										<Link href="#projects">
											<a className="block w-full" onClick={() => setShowMenu(false)}>Projects</a>
										</Link>
									</li>
									<li>
										<Link href="#contact">
											<a className="block w-full" onClick={() => setShowMenu(false)}>Contact</a>
										</Link>
									</li>
								</ul>
							</nav>
						</div>
					)
					: <MenuIcon className="h-8 cursor-pointer" onClick={() => setShowMenu(true)} />
				}
			</div>
			<nav className="hidden md:block">
				<ul className="flex">
					<li className="ml-10">
						<Link href="#experience">
							<a>Experience</a>
						</Link>
					</li>
					<li className="ml-10">
						<Link href="#projects">
							<a>Projects</a>
						</Link>
					</li>
					<li className="ml-10">
						<Link href="#contact">
							<a>Contact</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;