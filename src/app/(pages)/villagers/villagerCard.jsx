import React from "react";
import { FaPaw, FaCakeCandles, FaSun } from "react-icons/fa6";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";

export default function VillagerCard({ results }) {

	let display;
	if (results) {
		display = results.map((x) => {
			let { id, image_url, name, gender, species, birthday_day, birthday_month, sign, quote } = x;

			return (
				<div key={id} id="card-container" className="h-auto max-h-70 w-72 rounded-xl mb-5 flex flex-col p-4 text-center card-shadow">
					<div className="flex justify-center gap-4 text-sm">
						<p><FaPaw className="inline-block me-1 h-4" />{species ? (species) : "No info"}</p>
						<p><FaCakeCandles className="inline-block me-1 h-4" />{birthday_day ? (birthday_month + " " + birthday_day) : "No info"}</p>
						<p><FaSun className="inline-block me-1 h-4" />{sign ? (sign) : "No info"}</p>
					</div>
					<div>
						<p className="font-bold items-center text-xl uppercase">
							{name}
							{gender && gender === "Female" ? <BsGenderFemale className="inline-block ms-1 pb-1" /> : <BsGenderMale className="inline-block ms-1 pb-1" />}
						</p>
						<div className="flex justify-center pb-2">
							<img src={image_url} alt={name} className="h-24 w-auto" />
						</div>
						{
							quote && <p className="italic text-sm">{quote}</p>
						}
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
