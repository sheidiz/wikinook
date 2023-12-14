import React from "react";

export default function Fossils({ fossils }) {
	if (!fossils) return

	return (fossils.map((x) => {
		let { number, url, name, image_url, fossil_group, sell } = x;
		return (
			<tr key={number}>
				<td className="sm:pe-1 text-center lg:text-start">
					<img src={image_url} alt={name} className="pe-0 md:pe-2 h-10 sm:h-12 mx-auto block lg:inline-block" />
					{name}
				</td>
				<td className="sm:pe-1">{fossil_group? fossil_group : '-'}</td>
				<td className="sm:pe-1">${sell}</td>
				<td className="md:pe-1 text-red-300"><a href={url} target="_blank" rel="noreferrer">[+] More Info</a></td>
			</tr>
		)
	}))
}
