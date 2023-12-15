import React from 'react'

export default function SelectedFilters({ gender, setGender, species, setSpecies, sign, setSign }) {
	if (!gender && !species && !sign) return

	return (
		<div className="mb-2 flex flex-row justify-center md:justify-start gap-2 items-center text-sm text-gray-700 select-none">
			Selected filters:
			{gender &&
				<p className="p-1 border-2 border-red-200 rounded-md cursor-pointer" onClick={() => setGender("")}>
					x {gender}
				</p>
			}
			{species &&
				<p className="p-1 border-2 border-red-200 rounded-md cursor-pointer" onClick={() => setSpecies("")}>
					x {species}
				</p>
			}
			{sign &&
				<p className="p-1 border-2 border-red-200 rounded-md cursor-pointer" onClick={() => setSign("")}>
					x {sign}
				</p>
			}
		</div>
	)
}
