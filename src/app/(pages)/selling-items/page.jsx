"use client";

import SectionTitle from "@/components/section-title"
import React, { useEffect, useState } from "react"
import SellingItemsTabs from "./(components)/tabs";
import BugsTab from "./(components)/(bugs)/bugs-tab";
import FishTab from "./(components)/(fish)/fish-tab";
import FossilsTab from "./(components)/(fossils)/fossils-tab";

export default function Page() {

  const [selection, setSelection] = useState(() => {
    return window.location.hash || '#bugs';
  });

  useEffect(() => {
    const handleHashChange = () => {
      setSelection(window.location.hash || '#bugs');
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderContent = () => {
    switch (selection) {
      case '#bugs':
        return <BugsTab />;
      case '#fish':
        return <FishTab />;
      case '#fossils':
        return <FossilsTab />;
      default:
        return <div>Sea Creatures</div>;
    }
  };

  return (
    <section className="mt-3 md:mt-6 mb-8 md:mb-10 mx-2 md:mx-10 lg:mx-20">
      <SectionTitle>Selling List</SectionTitle>
      <SellingItemsTabs selection={selection} setSelection={setSelection} />
      <div className=" mt-2 p-2 md:p-8 shadow border text-gray-700 rounded overflow-x-auto">
        {renderContent()}
      </div>

    </section>
  )
}
