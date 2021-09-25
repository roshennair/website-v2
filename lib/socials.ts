import { groq } from 'next-sanity';
import Social from 'types/social';
import { getClient } from './sanity';

export const getSocials = async (preview: boolean = false) => {
	const query = groq`
		*[_type == "social"] {
			"id": _id,
			name,
			"slug": slug.current,
			url
		}
	`;

	const socials: Social[] = await getClient(preview).fetch(query);

	return socials;
}