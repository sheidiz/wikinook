import React from "react";

export default function SeaCreature({ content }) {
	if (!content) return 

	return (content.map((x) => {
		let { number, url, name, image_url, shadow_movement, sell_nook, shadow_size } = x;
		return (
			<tr key={number}>
				<td>{number}</td>
				<td className="sm:pe-1 text-center lg:text-start">
					<img src={image_url} alt={name} className="pe-0 md:pe-2 h-10 sm:h-12 mx-auto block lg:inline-block" />
					{name}
				</td>
				<td className="sm:pe-1">{shadow_movement}</td>
				<td className="md:pe-1">{shadow_size}</td>
				<td className="sm:pe-1">${sell_nook}</td>
				<td className="md:pe-1 text-red-300"><a href={url} target="_blank" rel="noreferrer">[+] More Info</a></td>
			</tr>
		)
	}))
}
