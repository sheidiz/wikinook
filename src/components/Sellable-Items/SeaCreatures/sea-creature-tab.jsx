import React, { useState, useEffect } from "react";
import SeaCreature from "./sea-creature";
import { getSeaCreatures } from "../../../../lib/data";
import { FaFilter } from "react-icons/fa6";

export default function SeaCreatureTab({ search }) {

	const [content, setContent] = useState([]);
	const [orderBy, setOrderBy] = useState("number");
	const [orderOrientation, setOrderOrientation] = useState("asc");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const content = await getSeaCreatures(search);

				content.sort(
					(a, b) => orderOrientation === "asc" ?
						a[orderBy] - b[orderBy] : b[orderBy] - a[orderBy]);

				setContent(content);
			} catch (error) {
				console.error("Error fetching sea creatures:", error);
			}
		};
		fetchData();
	}, [search, orderBy, orderOrientation]);

	const setFilter = (value) => {
		if (value === orderBy) {
			orderOrientation === "asc" ? setOrderOrientation("desc") : setOrderOrientation("asc");
		} else {
			setOrderBy(value);
			setOrderOrientation("asc");
		}
	};

	return (
		<table className="table-fixed sm:w-full box-border items-center bg-transparent border-collapse text-xs sm:text-sm break-words">
			<thead>
				<tr className="align-middle uppercase font-semibold text-left border border-solid border-l-0 border-r-0">
					<th className="w-6 sm:w-10 py-3 cursor-pointer" onClick={() => setFilter("number")} >
						ID <FaFilter className="pe-1 md:inline-block text-red-300" />
					</th>
					<th className="w-auto px-1 py-3 cursor-pointer md:pe-3 " onClick={() => setFilter("name")} >
						Name <FaFilter className="pe-1 md:inline-block text-red-300" />
					</th>
					<th className="w-auto px-1 py-3 md:pe-3 break-words">
						Shadow Movement
					</th>
					<th className="w-auto px-1 py-3 md:pe-3">
						Shadow Size
					</th>
					<th className="w-auto px-1 py-3 cursor-pointer md:pe-3" onClick={() => setFilter("sell_nook")}>
						Sell Nook <FaFilter className="pe-1 md:inline-block text-red-300" />
					</th>
					<th className="w-auto sm:w-auto md:pe-3">
						Details
					</th>
				</tr>
			</thead>

			<tbody>
				{
					content && <SeaCreature content={content} />
				}
			</tbody>
		</table>
	)
}
