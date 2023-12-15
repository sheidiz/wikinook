import { getData } from "./api";
import { months } from "./config";
import { paginateItems, completeEventInfo, sortEvents } from "./data-transform";

const currentYear = new Date().getFullYear();

/*Villagers */
export const getVillagers = async (search, gender, species, sign) => {
	const villagers = await getData("/villagers");

	if (!villagers) return [];

	const filtered = villagers.filter(
		item => (item['name'].toLowerCase().startsWith(search.toLowerCase())
			&& item['gender'].startsWith(gender)
			&& item['sign'].includes(sign)
			&& (species.length > 0 ? (item['species'] === (species)) : 'true')
		)
	);
	return paginateItems(filtered);
}

/*Events*/
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

	sortEvents("day", eventsPerMonth);
	
	return eventsPerMonth;
}

/* [BUGS] */
export const getBugs = async (search) => {
	try {
		const rawBugs = await getData('/nh/bugs');
		const bugs = rawBugs.filter(
			item => (
				item['name'].toLowerCase().includes(search.toLowerCase())
			)
		)
		return bugs;
	} catch (error) {
		console.error('Error fetching bugs:', error);
		return [];
	}
};
/* [FISHES] */
export const getFish = async (search) => {
	try {
		const rawFish = await getData('/nh/fish');
		const fish = rawFish.filter(
			item => (
				item['name'].toLowerCase().includes(search.toLowerCase())
			)
		)
		return fish;
	} catch (error) {
		console.error('Error fetching fishes:', error);
		return [];
	}
};
/* [SEA CREATURES] */
export const getSeaCreatures = async (search) => {
	try {
		const rawSeaCreatures = await getData('/nh/sea');
		const seaCreatures = rawSeaCreatures.filter(
			item => (
				item['name'].toLowerCase().includes(search.toLowerCase())
			)
		)
		return seaCreatures;
	} catch (error) {
		console.error('Error fetching sea creatures:', error);
		return [];
	}
};
/* [FOSSILS] */
export const getFossils = async (search) => {
	try {
		const rawFossils = await getData('/nh/fossils/individuals');
		const fossils = rawFossils.filter(
			item => (
				item['name'].toLowerCase().includes(search.toLowerCase())
			)
		)
		return fossils;
	} catch (error) {
		console.error('Error fetching fossils:', error);
		return [];
	}
};