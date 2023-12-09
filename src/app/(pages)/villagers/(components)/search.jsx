import React from "react"

export default function Search({ setSearch, setCurrentPage }) {
	return (
		<form className="mt-1 mb-4 md:mb-10 mx-0 md:mx-5 text-center">
			<input
				placeholder="Search for a villager..."
				type="text"
				className="w-3/4 md:w-[50vw] border border-red-300 p-2 rounded-lg shadow-lg"
				onChange={(e) => {
					setSearch(e.target.value);
					setCurrentPage(0);
				}}
			/>
		</form>
	)
}
