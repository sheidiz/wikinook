import React from "react";
import { FaPaw, FaCakeCandles, FaSun, FaQuoteRight } from "react-icons/fa6";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";

export default function VillagerCard({ results }) {

	let display;
	if (results) {
		display = results.map((x) => {

			let { id, image_url, name, gender, species, birthday_day, birthday_month, sign, quote } = x;

			return (
				<div
					key={id}
					className="h-auto max-h-70 w-72 rounded-xl flex flex-col text-center text-gray-600 border-2 border-red-300 shadow-lg shadow-slate-100">
					<div className="p-2 flex justify-center gap-4 text-sm bg-red-300 rounded-t-md ">
						<p className="flex flex-col items-center lg:flex-row lg:gap-1"><FaPaw />{species ? (species) : "No info"}</p>
						<p className="flex flex-col items-center lg:flex-row lg:gap-1"><FaCakeCandles />{birthday_day ? (birthday_month + " " + birthday_day) : "No info"}</p>
						<p className="flex flex-col items-center lg:flex-row lg:gap-1"><FaSun />{sign ? (sign) : "No info"}</p>
					</div>
					<div className="py-2 border-b border-red-300">
						<p className="font-bold items-center text-xl uppercase ">
							{name}
							{gender && gender === "Female" ? <BsGenderFemale className="inline-block ms-1 pb-1" /> : <BsGenderMale className="inline-block ms-1 pb-1" />}
						</p>
					</div>
					<div className="p-3">
						<div className="flex justify-center pb-2">
							<img src={image_url} alt={name} className="h-24 w-auto" />
						</div>
						{quote && <p className="italic text-sm"><FaQuoteRight className="inline-block me-1" />{quote}</p>}
					</div>
				</div>
			)
		});
	} else {
		display = <p>No Villagers Found</p>
	}
	return (
		<>{display}</>
	)
}
