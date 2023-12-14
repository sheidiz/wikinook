import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa6";
import { getFossils } from "../../../../../../lib/data";
import Fossils from "./fossils";

export default function FossilsTab() {

	const [fossils, setFossils] = useState([]);
	const [orderBy, setOrderBy] = useState("number");
	const [orderOrientation, setOrderOrientation] = useState("asc");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fossils = await getFossils();

				fossils.sort(
					(a, b) => orderOrientation === "asc" ?
						a[orderBy] - b[orderBy] : b[orderBy] - a[orderBy]);

				setFossils(fossils);
			} catch (error) {
				console.error("Error fetching fossils:", error);
			}
		};
		fetchData();
	}, [orderBy, orderOrientation]);

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
					<th className="w-10 sm:w-auto px-1 py-3 cursor-pointer md:pe-3 " onClick={() => setFilter("name")} >
						Name <FaFilter className="pe-1 md:inline-block text-red-300" />
					</th>
					<th className="w-16 sm:w-auto px-1 py-3 cursor-pointer md:pe-3 break-words" onClick={() => setFilter("fossil_group")}>
						Fossil Group <FaFilter className="pe-1 md:inline-block text-red-300" />
					</th>
					<th className="w-16 sm:w-auto px-1 py-3 cursor-pointer md:pe-3" onClick={() => setFilter("sell")}>
						Sell <FaFilter className="pe-1 md:inline-block text-red-300" />
					</th>
					<th className="w-10 sm:w-auto md:pe-3">
						Details
					</th>
				</tr>
			</thead>

			<tbody>
				{
					
					fossils && <Fossils fossils={fossils} />
				}
			</tbody>
		</table>
	)
}
