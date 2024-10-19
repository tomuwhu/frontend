var n = 1
export function load() {
	return {n}
}
export const actions = {
	default: async (event) => {
		let answ = await event.request.formData()
        n += Number(answ.get("n"))
	}
}