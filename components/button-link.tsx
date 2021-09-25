import Link from 'next/link';

const ButtonLink = ({ text, href, newTab }: { text: string, href: string, newTab?: boolean }) => {
	return (
		<Link href={href} passHref={newTab || false}>
			<a
				target={newTab ? '_blank' : '_self'}
				className="btn"
			>
				{text}
			</a>
		</Link>
	)
}

export default ButtonLink;