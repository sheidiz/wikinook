const api = 'https://api.nookipedia.com/';
const apiKey = process.env.NEXT_PUBLIC_NOOKIPEDIA_API_KEY;

/* Api Fetch Internal Function */
export async function getData(path) {
	const res = await fetch(api + path, {
		headers: {
			'X-API-KEY': apiKey,
		},
	});
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	return res.json()
}