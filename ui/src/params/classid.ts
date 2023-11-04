/** @type {import('@sveltejs/kit').ParamMatcher} */ export function match(param) {
	return /^class_[a-zA-Z0-9]+_(?:[0-9]|1[0-2])$/.test(param);
}
