import { auth } from '$lib/server/lucia';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions = {
	default: async (event) => {
		const authRequest = auth.handleRequest(event);
		const form = await event.request.formData();
		const userid = form.get('userid');
		const password = form.get('password');

		const key = await auth.useKey('studentID', userid as string, password as string);
		if (!key) throw new Error('Invalid login');
		const session = await auth.createSession({
			userId: key.userId,
			attributes: {}
		});
		authRequest.setSession(session);
		throw redirect(302, '/home');
	}
} satisfies Actions;
