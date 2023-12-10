"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { months } from "../../../../../lib/data";

export default function FilterMonth({ setFilters }) {
	
	const [isOpen, setIsOpen] = useState(false);
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="relative w-44 p-1 md:p-2 border rounded-lg bg-red-300">
			<button
				className="flex flex-row gap-4 ms-1 me-2 text-white text-md focus:outline-none"
				onClick={toggleDropdown}
			>
				<span>Select a month</span>
				{isOpen ?
					(<FaChevronUp className="mt-1" />) :
					(<FaChevronDown className="mt-1" />)
				}
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.3 }}
						className="absolute top-12 inset-x-0 bg-red-200"
					>
						{months.map((month) => (
							<button
								className="block w-full bg-white text-start text-red-300 hover:font-bold text-xs md:text-sm px-4 py-2 border-x first:border-t last:border-b"
								key={month.monthId}
								onClick={() => {
									toggleDropdown();
									setFilters({ ...filter, month: month.monthId })
								}}
							>
								{month.month}
							</button>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
