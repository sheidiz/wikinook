"use client";

import SectionTitle from "@/components/section-title"
import React, { useState } from "react"
import FilterMonth from "./(components)/filter-month"
import FilterHemisphere from "./(components)/filter-hemisphere"

export default function Page() {

  const [filters, setFilters] = useState({ month:"", hemisphere:"South Hemisphere"});

  return (
    <div className="my-3 md:my-6 mx-2 md:mx-10 lg:mx-20">
      <SectionTitle>Events</SectionTitle>
      <div className="flex justify-center md:justify-start gap-2">
        <FilterMonth setFilters={setFilters} />
        <FilterHemisphere filters={filters.hemisphere} setFilters={setFilters} />
      </div>
    </div>
  )
}
