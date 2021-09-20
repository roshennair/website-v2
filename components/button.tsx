import Link from 'next/link';

const Button = ({ text, href }: { text: string, href: string }) => {
	return (
		<Link href={href}>
			<a className="
					border-2
					border-solid
					border-black
					px-7
					py-3
					rounded-md 
					mt-5
					mr-10
				">
				{text}
			</a>
		</Link>
	)
}

export default Button;