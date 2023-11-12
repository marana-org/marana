import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	return {
		assignment: params.assignment
	};
}) satisfies PageLoad;
