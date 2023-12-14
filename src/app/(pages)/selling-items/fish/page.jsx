"use client";

import SectionTitle from "@/components/section-title"
import React, { useState } from "react"
import SellingItemsTabs from "../(components)/tabs";
import FishTab from "./(components)/fish-tab";

export default function Page() {

  const [selection, setSelection] = useState("fish");

  return (
    <section className="mt-3 md:mt-6 mb-8 md:mb-10 mx-2 md:mx-10 lg:mx-20">
      <SectionTitle>Selling List</SectionTitle>
      <SellingItemsTabs selection={selection} setSelection={setSelection} />
      <div className="mt-2 p-2 md:p-8 shadow border text-gray-700 rounded overflow-x-auto">
        <FishTab />
      </div>
    </section>
  )
}