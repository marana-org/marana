import { dev } from '$app/environment';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const classData = await fetch(
		`http://${dev ? 'localhost:3000' : '// insert prod url here'}/class`
	);

	return {
		classes: await classData.json()
	};
}) satisfies LayoutServerLoad;
