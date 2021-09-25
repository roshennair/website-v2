import IconType from 'types/icon-type';
import Social from 'types/social';
import Icon from './icons/icon';

const SocialLogo = ({ social }: { social: Social }) => {
	return (
		<div className="w-full flex justify-center">
			<a href={social.url} target="_blank">
				<div
					title={social.name}
					className="
						stroke-current
						cursor-pointer
						p-4
						rounded-full
						border-solid
						border-black
						hover:text-white
						hover:bg-black
						duration-300
					"
				>
					<Icon type={social.slug as IconType} />
				</div>
			</a>
		</div>
	)
}

export default SocialLogo;
