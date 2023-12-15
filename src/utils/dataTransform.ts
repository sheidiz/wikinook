/* Pagination Logic -> The API doesn't provide pages. This will divide the array into arrays of x items */
export const paginateItems = (array) => {
	const width = window.innerWidth;

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

/* Function that adds info to Events: date separated and hemisphere */
export const completeEventInfo = (e) => {
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

export const sortEvents = (field, events) => {
	events.forEach(e => {
		e.sort((a, b) => {
			return a[field] - b[field];
		});
	});
}

