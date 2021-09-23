import Link from 'next/link';

const Button = ({ text, href, newTab }: { text: string, href: string, newTab?: boolean }) => {
	return (
		<Link href={href} passHref={newTab || false}>
			<a
				target={newTab ? '_blank' : '_self'}
				className="
					border-2
					border-solid
					border-black
					px-7
					py-3
					rounded-md
				"
			>
				{text}
			</a>
		</Link>
	)
}

export default Button;