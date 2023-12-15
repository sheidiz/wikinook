import React, { useState, useEffect } from "react";
import Bugs from "./bugs";
import { getBugs } from "@/utils/data";
import { FaFilter } from "react-icons/fa6";

export default function BugsTab({ search }) {

	const [bugs, setBugs] = useState([]);
	const [orderBy, setOrderBy] = useState('number');
	const [orderOrientation, setOrderOrientation] = useState('asc');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const bugs = await getBugs(search);

				bugs.sort(
					(a, b) => orderOrientation === 'asc' ?
						a[orderBy] - b[orderBy] : b[orderBy] - a[orderBy]);

				setBugs(bugs);
			} catch (error) {
				console.error('Error fetching bugs:', error);
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
					<th className="w-10 sm:w-auto px-1 py-3 cursor-pointer md:pe-3 " onClick={() => setFilter("name")} >
						Name <FaFilter className="pe-1 md:inline-block text-red-300" />
					</th>
					<th className="w-16 sm:w-auto px-1 py-3 cursor-pointer md:pe-3 break-all" onClick={() => setFilter("location")}>
						Location <FaFilter className="pe-1 md:inline-block text-red-300" />
					</th>
					<th className="w-16 sm:w-auto px-1 py-3 cursor-pointer md:pe-3" onClick={() => setFilter("sell_nook")}>
						Sell Nook <FaFilter className="pe-1 md:inline-block text-red-300" />
					</th>
					<th className="w-16 sm:w-auto px-1py-3 cursor-pointer  md:pe-3" onClick={() => setFilter("sell_flick")}>
						Sell Flick <FaFilter className="pe-1 md:inline-block text-red-300" />
					</th>
					<th className="w-10 sm:w-auto md:pe-3">
						Details
					</th>
				</tr>
			</thead>

			<tbody>
				{
					bugs && <Bugs bugs={bugs} />
				}
			</tbody>
		</table>
	)
}
