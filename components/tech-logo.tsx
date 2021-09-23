import Image from 'next/image';

const TechLogo = ({ title, src }: { title: string, src: string }) => {
	return (
		<div className="w-full flex justify-center">
			<div title={title} className="relative h-20 w-20">
				<Image src={src} layout="fill" objectFit="contain" alt={title} />
			</div>
		</div>
	)
}

export default TechLogo;
