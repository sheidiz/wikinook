import React from 'react'

export default function SellingItemsTabs({ selection, setSelection }) {

	const selectedStyle = "bg-gray-100 !text-red-300 !font-bold"

	return (
		<ul className="grid grid-flow-col text-center text-gray-500 border rounded p-2">
			<li>
				<a href="#bugs"
					onClick={() => setSelection("#bugs")}
					className={`flex justify-center py-2 ${selection === "#bugs" && selectedStyle}`}>
					Bugs
				</a>
			</li>
			<li>
				<a href="#fish"
					onClick={() => setSelection("#fish")}
					className={`flex justify-center py-2 ${selection === "#fish" && selectedStyle}`}>
					Fish
				</a>
			</li>
			<li>
				<a href="#fossils"
					onClick={() => setSelection("#fossils")}
					className={`flex justify-center py-2 ${selection === "#fossils" && selectedStyle}`}>
					Fossils
				</a>
			</li>
			<li>
				<a href="#sea-creatures"
					onClick={() => setSelection("#sea-creatures")}
					className={`flex justify-center py-2 ${selection === "#sea-creatures" && selectedStyle}`}>
					Sea Creatures
				</a>
			</li>
		</ul>
	)
}
