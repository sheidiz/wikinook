import React, { useState, useEffect } from "react";
import Fish from "./fish";
import { getFish } from "../../../../lib/data";
import { FaFilter } from "react-icons/fa6";

export default function FishTab({ search }) {

	const [fish, setFish] = useState([]);
	const [orderBy, setOrderBy] = useState("number");
	const [orderOrientation, setOrderOrientation] = useState("asc");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fish = await getFish(search);

				fish.sort(
					(a, b) => orderOrientation === "asc" ?
						a[orderBy] - b[orderBy] : b[orderBy] - a[orderBy]);

				setFish(fish);
			} catch (error) {
				console.error("Error fetching fish:", error);
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
		<table className="table-fixed min-[320px]:table-auto min-[320px]:w-full box-border items-center bg-transparent border-collapse text-xs sm:text-sm break-words">
			<thead>
				<tr className="align-middle uppercase font-semibold text-left border border-solid border-l-0 border-r-0">
					<th className="max-w-6 min-[320px]:max-w-10 py-3 cursor-pointer" onClick={() => setFilter("number")} >
						ID <FaFilter className="pe-1 md:inline-block text-red-300" />
					</th>
					<th className="max-w-10 min-[320px]:max-w-none px-1 py-3 cursor-pointer md:pe-3 " onClick={() => setFilter("name")} >
						Name <FaFilter className="pe-1 md:inline-block text-red-300" />
					</th>
					<th className="max-w-16 min-[320px]:max-w-none px-1 py-3 cursor-pointer md:pe-3 break-words" onClick={() => setFilter("location")}>
						Location <FaFilter className="pe-1 md:inline-block text-red-300" />
					</th>
					<th className="max-w-16 min-[320px]:max-w-none px-1 py-3 cursor-pointer md:pe-3" onClick={() => setFilter("sell_nook")}>
						Sell Nook <FaFilter className="pe-1 md:inline-block text-red-300" />
					</th>
					<th className="max-w-16 min-[320px]:max-w-none px-1 py-3 cursor-pointer  md:pe-3" onClick={() => setFilter("sell_cj")}>
						Sell CJ <FaFilter className="pe-1 md:inline-block text-red-300" />
					</th>
					<th className="max-w-10 min-[320px]:max-w-none md:pe-3">
						Details
					</th>
				</tr>
			</thead>

			<tbody>
				{
					fish && <Fish fish={fish} />
				}
			</tbody>
		</table>
	)
}
