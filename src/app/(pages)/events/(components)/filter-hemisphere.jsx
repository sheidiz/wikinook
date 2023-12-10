import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbMapNorth, TbMapSouth } from "react-icons/tb";

export default function FilterHemisphere({ filters, setFilters }) {
  const [isNorth, checkIsNorth] = useState(true);

  const handleToggle = (selectedHemisphere) => {
    checkIsNorth(selectedHemisphere === "(Northern Hemisphere)")
    setFilters({
      ...filters, hemisphere: selectedHemisphere
    })
  }

  const labelStyle = "md:w-54 px-4 flex items-center gap-2 rounded py-1 text-gray-800 text-sm md:text-md font-medium cursor-pointer";
  const activeStyle = "bg-gray-100 !text-red-300 font-bold";

  return (
    <div className="bg-white shadow flex flex-col sm:flex-row select-none items-center justify-center rounded-md p-1">
      <input
        className="hidden"
        type="radio"
        name="hemisphere"
        id="hemisphere-north"
      />
      <label
        htmlFor="hemisphere-north"
        onClick={(x) => { handleToggle("(Northern Hemisphere)"); }}
        className={`${labelStyle} ${isNorth && activeStyle}`}
      >
        <TbMapNorth />
        Northern Hemisphere
      </label>
      <input
        className="hidden"
        type="radio"
        name="hemisphere"
        id="hemisphere-south"
      />
      <label
        htmlFor="hemisphere-south"
        onClick={(x) => { handleToggle("(Southern Hemisphere)"); }}
        className={`${labelStyle} ${!isNorth && activeStyle }`}
      >
        <TbMapSouth />
        Southern Hemisphere
      </label>
    </div>
  )
}
