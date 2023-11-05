import type { LayoutLoad } from './$types';

export const load = (async ({ url }) => {
	let hierarchy = url.searchParams.get('hierarchy');
	if (!hierarchy) hierarchy = 'student';
	if (hierarchy !== 'student' && hierarchy !== 'teacher') throw new Error('Invalid user status');

	return {
		hierarchy: hierarchy
	};
}) satisfies LayoutLoad;
