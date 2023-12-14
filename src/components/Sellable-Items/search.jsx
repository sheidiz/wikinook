import React from 'react'

export default function Search({itemName, setSearch}) {
    return (
        <form className="mt-1 mb-4 md:mb-6">
            <input
                placeholder={"Search for a " + itemName + "..."}
                type="text"
                className="w-60  border border-red-300 text-sm focus:outline-none focus:shadow-red-100 p-2 rounded-lg shadow-lg"
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            />
        </form>
    )
}
