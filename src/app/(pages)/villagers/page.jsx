"use client";

import React, { useEffect, useState } from "react";
import { TbFilterX } from "react-icons/tb";
import { getVillagers, listGenders, listSpecies, listSigns } from "../../../../lib/data.ts";
import Loading from "@/components/loading.jsx";
import VillagerCard from "./(components)/villagerCard.jsx";
import Search from "./(components)/search.jsx";
import Pagination from "./(components)/pagination.jsx";
import Filter from "./(components)/filter.jsx";


export default function Villagers() {

  const [loading, setLoading] = useState();
  const [data, setData] = useState([]);
  const [pages, setPages] = useState();
  const [currentPage, setCurrentPage] = useState(0);

  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [sign, setSign] = useState("");

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const villagers = await getVillagers(search, gender, species, sign);
        setData(villagers);
        const totalItems = villagers.reduce((total, currentArray) => total + currentArray.length, 0);
        const pages = Math.ceil(totalItems / 10);
        setPages(pages);
      } catch (error) {
        console.error("Error fetching villagers:", error);
      }
      setLoading(false);
    };
    getData();
  }, [search, gender, species, sign]);

  const clearFilters = () => {
    setGender('');
    setSpecies('');
    setSign('');
    setCurrentPage(0);
    window.location.reload(false);
  };

  return (
    <div className="my-3 md:my-6 mx-2 md:mx-20">
      <div>
        <h1 className="text-red-300 text-center text-5xl font-bold mb-5">Villagers</h1>
        <Search setSearch={setSearch} setCurrentPage={setCurrentPage} />
      </div>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex flex-col mx-auto w-4/5 md:w-1/5 text-gray-400">
          <p className="text-2xl font-bold text-center"> Filters</p>

          <button className="mb-2" onClick={clearFilters}>
            <TbFilterX className="inline-block me-1 mb-1" />
            <span className="underline">Clear Filters</span>
          </button>

          <Filter title="Gender" content={listGenders} setFilter={setGender} selected={gender} setCurrentPage={setCurrentPage} />
          <Filter title="Species" content={listSpecies} setFilter={setSpecies} selected={species} setCurrentPage={setCurrentPage} />
          <Filter title="Signs" content={listSigns} setFilter={setSign} selected={sign} setCurrentPage={setCurrentPage} />
        </div>
        <div className="flex flex-wrap gap-5 md:w-4/5">
          {
            loading ? (<Loading />) : (<VillagerCard results={data[currentPage]} />)
          }
        </div>
      </div>
      <Pagination pages={pages} setCurrentPage={setCurrentPage} />
    </div>
  )
}
