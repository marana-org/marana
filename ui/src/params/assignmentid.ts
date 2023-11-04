/** @type {import('@sveltejs/kit').ParamMatcher} */ export function match(param) {
	return /^assignment_[a-zA-Z0-9]+/.test(param);
}
