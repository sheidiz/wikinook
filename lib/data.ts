export const links = [
	{ name: "Home", url: "/" },
	{ name: "Villagers", url: "/villagers" },
	{ name: "Events", url: "/events" },
	{ name: "Selling Items", url: "/selling-items#bugs" }
] as const;

export const listGenders = ['Female', 'Male'] as const;
export const listSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio',
	'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'] as const;
export const listSpecies = ['Alligator', 'Anteater', 'Bear', 'Bear cub', 'Bird', 'Bull', 'Cat', 'Cub', 'Chicken',
	'Cow', 'Deer', 'Dog', 'Duck', 'Eagle', 'Elephant', 'Frog', 'Goat', 'Gorilla', 'Hamster',
	'Hippo', 'Horse', 'Koala', 'Kangaroo', 'Lion', 'Monkey', 'Mouse', 'Octopus', 'Ostrich',
	'Penguin', 'Pig', 'Rabbit', 'Rhino', 'Rhinoceros', 'Sheep', 'Squirrel', 'Tiger', 'Wolf'] as const;

const api = 'https://api.nookipedia.com/';
const apiKey = process.env.NEXT_PUBLIC_NOOKIPEDIA_API_KEY;

/* Api Fetch Internal Function */
async function getData(path) {
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

/* Pagination Logic -> The API doesn't provide pages. This will divide results into arrays of 10 items */
const paginateItems = (array) => {
	let width = window.innerWidth;

	const itemsPerPage = () => {
		if (width <= 576) { /*sm or lower */
			return 6;
		} else if (width <= 1024) { /*md or lower */
			return 10;
		} else { /*higher than md */
			return 9;
		}
	};

	const paginated = [];
	if (array && array.length > 0) {
		const itemsPerPageValue = itemsPerPage();
		for (let i = 0; i < array.length; i += itemsPerPageValue) {
			paginated.push(array.slice(i, i + itemsPerPageValue));
		}
	}
	return paginated;
};

export const getVillagers = async (search, gender, species, sign) => {
	const villagers = await getData("/villagers");
	if (villagers) {
		const filtered = villagers.filter(
			item => (item['name'].toLowerCase().startsWith(search.toLowerCase())
				&& item['gender'].startsWith(gender)
				&& item['sign'].includes(sign)
				&& (species.length > 0 ? (item['species'] === (species)) : 'true')
			)
		);
		return paginateItems(filtered);
	} else {
		return [];
	}
}

/*Events*/
const currentYear = new Date().getFullYear();
export const months = [
	{ month: "January", monthId: "01" },
	{ month: "February", monthId: "02" },
	{ month: "March", monthId: "03" },
	{ month: "April", monthId: "04" },
	{ month: "May", monthId: "05" },
	{ month: "June", monthId: "06" },
	{ month: "July", monthId: "07" },
	{ month: "August", monthId: "08" },
	{ month: "September", monthId: "09" },
	{ month: "October", monthId: "10" },
	{ month: "November", monthId: "11" },
	{ month: "December", monthId: "12" },
] as const;

const completeEventInfo = (e) => {
	const hemisphere =
		e.event.includes("South") ? ("(Southern Hemisphere)") :
			e.event.includes("North") ? ("(Northern Hemisphere)") :
				"(Both Hemispheres)";

	return {
		...e,
		day: e.date.slice(8, 10),
		month: e.date.slice(5, 7),
		year: e.date.slice(0, 4),
		hemisphere
	};
};

export const getEvents = async (hemisphere) => {
	const rawEvents = await getData('/nh/events');

	if (!rawEvents) return [];

	const events = rawEvents.map(completeEventInfo);

	const eventsPerMonth = months.map(
		(m) => events
			.filter((e) => e.month.includes(m.monthId))
			.filter((event) => event.year.includes(currentYear) &&
				event.type !== 'Birthday' &&
				(event.hemisphere === "(Both Hemispheres)" || event.hemisphere === hemisphere))
	);

	eventsPerMonth.forEach(monthEvents => {
		monthEvents.sort((a, b) => {
			return a.day - b.day;
		});
	});
	return eventsPerMonth;

}

/* [BUGS] */
export const getBugs = async () => {
	try {
		const bugs = await getData('/nh/bugs');
		return bugs;
	} catch (error) {
		console.error('Error fetching bugs:', error);
		return [];
	}
};
/* [FISHES] */
export const getFish = async () => {
	try {
		const fishes = await getData('/nh/fish');
		return fishes;
	} catch (error) {
		console.error('Error fetching fishes:', error);
		return [];
	}
};
/* [SEA CREATURES] */
export const getSeaCreatures = async () => {
	try {
		const seaCreatures = await getData('/nh/sea');
		return seaCreatures;
	} catch (error) {
		console.error('Error fetching sea creatures:', error);
		return [];
	}
};
/* [FOSSILS] */
export const getFossils = async () => {
	try {
		const fossils = await getData('/nh/fossils/individuals');
		return fossils;
	} catch (error) {
		console.error('Error fetching fossils:', error);
		return [];
	}
};