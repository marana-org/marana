/** @type {import('@sveltejs/kit').ParamMatcher} */ export function match(param) {
	return /^submission_[a-zA-Z0-9]+/.test(param);
}
