import IconType from "types/icon-type";
import EmailLogo from "./email";
import GitHubLogo from "./github";
import InstagramLogo from "./instagram";
import LinkedInLogo from "./linkedin";
import TwitterLogo from "./twitter";
import YouTubeLogo from "./youtube";

const Icon = ({ type }: { type: IconType }) => {
	switch (type) {
		case 'email':
			return <EmailLogo />
		case 'github':
			return <GitHubLogo />
		case 'instagram':
			return <InstagramLogo />
		case 'linkedin':
			return <LinkedInLogo />
		case 'twitter':
			return <TwitterLogo />
		case 'youtube':
			return <YouTubeLogo />
	}
}

export default Icon;