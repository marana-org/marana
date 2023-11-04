/** @type {import('@sveltejs/kit').ParamMatcher} */ export function match(param) {
	return /^class_[a-zA-Z0-9]+/.test(param);
}
