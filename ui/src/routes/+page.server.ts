import { auth } from '$lib/server/lucia';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
	const sessionId = cookies.get('auth_session');

	if (sessionId) {
		const session = await auth.getSession(sessionId);
		console.log(session);

		if (session.state === 'active') throw redirect(302, '/home');
	}

	return {};
}) satisfies PageServerLoad;
