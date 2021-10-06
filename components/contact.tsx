import Social from "types/social";
import SocialLogo from "./social-logo";

const Contact = ({ socials }: { socials: Social[] }) => {
	return (
		<section id="contact" className="section">
			<h2 className="text-4xl font-bold">
				Contact
			</h2>
			<p className="pt-5 text-lg leading-8">
				Get in touch with me on any of the following platforms:
			</p>
			<div className="px-5 sm:px-0 py-10 grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
				{
					socials.map(social => <SocialLogo key={social.id} social={social} />)
				}
			</div>
		</section >
	)
}

export default Contact;