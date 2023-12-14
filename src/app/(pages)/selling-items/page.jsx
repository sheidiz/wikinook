"use client";

import SectionTitle from "@/components/section-title"
import React, { useEffect, useState } from "react"
import SellingItemsTabs from "./(components)/tabs";
import BugsTab from "./(components)/(bugs)/bugs-tab";

export default function Page() {

  const [selection, setSelection] = useState("#bugs");

  return (
    <section className="mt-3 md:mt-6 mb-8 md:mb-10 mx-2 md:mx-10 lg:mx-20">
      <SectionTitle>Selling List</SectionTitle>
      <SellingItemsTabs selection={selection} setSelection={setSelection} />
      <div className="bg-white shadow border border-gray-100 p-2 md:p-8 text-gray-700 rounded-lg -mt-2 overflow-x-auto">
        {selection === "#bugs" && <BugsTab />}
        {selection === "#fish" && "Fish"}
        {selection === "#fossils" && "Fossils"}
        {selection === "#sea-creatures" && "Sea Creatures"}
        
      </div>

    </section>
  )
}
