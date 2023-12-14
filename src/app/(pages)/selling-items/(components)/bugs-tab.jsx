import React, { useState, useEffect } from "react";
import Bugs from "./bugs";
import { getBugs } from "../../../../../lib/data";
import { FaFilter } from "react-icons/fa6";

export default function BugsTab() {

	const [bugs, setBugs] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const bugs = await getBugs();

				bugs.sort((a, b) => a["number"] - b["number"])
				setBugs(bugs);
			} catch (error) {
				console.error('Error fetching bugs:', error);
			}
		};
		fetchData();
	}, [bugs]);

	return (
		<table className="table-fixed sm:w-full box-border items-center bg-transparent border-collapse text-xs sm:text-sm break-words">
			<thead>
				<tr className="align-middle uppercase font-semibold text-left">
					<th className="w-6 sm:w-10 border border-solid py-3 border-l-0 border-r-0">
						ID <FaFilter className="pe-1 md:inline-block text-red-300" />
					</th>
					<th className="w-10 sm:w-auto px-1 md:pe-3 py-3 border border-solid border-l-0 border-r-0">
						Name <FaFilter className="pe-1 md:inline-block text-red-300" />
					</th>
					<th className="w-16 sm:w-auto px-1 md:pe-3 py-3 border border-solid border-l-0 border-r-0 break-all">
						Location <FaFilter className="pe-1 md:inline-block text-red-300" />
					</th>
					<th className="w-16 sm:w-auto px-1 md:pe-3 py-3 border border-solid border-l-0 border-r-0">
						Sell Nook <FaFilter className="pe-1 md:inline-block text-red-300" />
					</th>
					<th className="w-16 sm:w-auto px-1 md:pe-3 py-3 border border-solid border-l-0 border-r-0">
						Sell Flick <FaFilter className="pe-1 md:inline-block text-red-300" />
					</th>
					<th className="w-10 sm:w-auto md:pe-3 py-3 border border-solid border-l-0 border-r-0">
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
