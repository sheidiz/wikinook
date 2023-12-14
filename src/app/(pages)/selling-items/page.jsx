"use client";

import SectionTitle from "@/components/section-title"
import React, { useEffect, useState } from "react"
import SellingItemsTabs from "./(components)/tabs";
import BugsTab from "./(components)/(bugs)/bugs-tab";
import FishTab from "./(components)/(fish)/fish-tab";

export default function Page() {

  const getHashFromWindow = () => typeof window !== 'undefined' ? window.location.hash : null;
  const [selection, setSelection] = useState(getHashFromWindow() || "#bugs");

  useEffect(() => {
    const handleHashChange = () => {
      setSelection(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <section className="mt-3 md:mt-6 mb-8 md:mb-10 mx-2 md:mx-10 lg:mx-20">
      <SectionTitle>Selling List</SectionTitle>
      <SellingItemsTabs selection={selection} setSelection={setSelection} />
      <div className=" mt-2 p-2 md:p-8 shadow border text-gray-700 rounded overflow-x-auto">
        {selection === "#bugs" && <BugsTab />}
        {selection === "#fish" && <FishTab />}
        {selection === "#fossils" && "Fossils"}
        {selection === "#sea-creatures" && "Sea Creatures"}
      </div>

    </section>
  )
}
