import { getData } from "./api";
import { months } from "./config";
import { paginateItems, completeEventInfo, sortEvents } from "./dataTransform";

const currentYear = new Date().getFullYear();

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

	sortEvents("day", eventsPerMonth);

	return eventsPerMonth;
};

export const getBugs = async (search) => {
	const bugs = await getData('/nh/bugs');

	if (!bugs) return [];

	const filtered = bugs.filter(
		item => (
			item['name'].toLowerCase().includes(search.toLowerCase())
		)
	)

	return filtered;
};

export const getFish = async (search) => {
	const fish = await getData('/nh/fish');

	if (!fish) return [];

	const filtered = fish.filter(
		item => (
			item['name'].toLowerCase().includes(search.toLowerCase())
		)
	)

	return filtered;
};

export const getSeaCreatures = async (search) => {
	const seaCreatures = await getData('/nh/sea');

	if (!seaCreatures) return [];

	const filtered = seaCreatures.filter(
		item => (
			item['name'].toLowerCase().includes(search.toLowerCase())
		)
	)

	return filtered;
};

export const getFossils = async (search) => {
	const fossils = await getData('/nh/fossils/individuals');

	if (!fossils) return [];

	const filtered = fossils.filter(
		item => (
			item['name'].toLowerCase().includes(search.toLowerCase())
		)
	)

	return filtered;
};