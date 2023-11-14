import { auth } from '$lib/server/lucia';
import { dev } from '$app/environment';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ fetch, params, cookies }) => {
	const sessionId = cookies.get('auth_session');

	if (!sessionId) throw new Error('No session id found');

	const session = await auth.getSession(sessionId);

	if (session.state !== 'active') throw new Error('Session is inactive or invalid');

	const classData = await fetch(
		`http://${dev ? 'localhost:3000' : '// insert prod url here'}/class?class_id=${params.class}`
	);

	return {
		user: session.user,
		class: (await classData.json()).classes[0]
	};
}) satisfies LayoutServerLoad;
