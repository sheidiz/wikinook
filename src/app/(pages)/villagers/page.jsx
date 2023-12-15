"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TbFilterX } from "react-icons/tb";
import { villagersContainer } from "@/utils/animations";
import { listGenders, listSpecies, listSigns } from "@/utils/config";
import { getVillagers } from "@/utils/getData";
import SectionTitle from "@/components/section-title.jsx";
import Loading from "@/components/loading.jsx";
import VillagerCard from "@/components/Villagers/villagerCard.jsx";
import Search from "@/components/Villagers/search.jsx";
import Pagination from "@/components/Villagers/pagination.jsx";
import Filter from "@/components/Villagers/filter.jsx";
import SelectedFilters from "@/components/Villagers/selected-filters";


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
        const pages = Math.ceil(totalItems / (villagers[0].length));
        setCurrentPage(0);
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
  };

  return (
    <div className="my-3 md:my-6 mx-2 md:mx-10 lg:mx-20">
      <div>
        <SectionTitle>Villagers</SectionTitle>
        <Search setSearch={setSearch} setCurrentPage={setCurrentPage} />
      </div>
      <div className="flex flex-col md:flex-row gap-2 lg:gap-10">
        <div className="flex flex-col mx-auto w-4/5 md:w-2/6 lg:w-1/5 text-gray-400">
          <p className="text-xl md:text-2xl font-bold text-start md:text-center">Filters</p>
          <button className="mt-0 lg:mt-2 mb-2 text-sm text-start md:text-center" onClick={clearFilters}>
            <TbFilterX className="inline-block me-1 mb-1" />
            <span className="underline">Clear Filters</span>
          </button>
          <div className="flex flex-col">
            <Filter title="Gender" content={listGenders} setFilter={setGender} selected={gender} setCurrentPage={setCurrentPage} />
            <Filter title="Species" content={listSpecies} setFilter={setSpecies} selected={species} setCurrentPage={setCurrentPage} />
            <Filter title="Signs" content={listSigns} setFilter={setSign} selected={sign} setCurrentPage={setCurrentPage} />
          </div>
        </div>
        <div className="mt-2 md:w-4/6 lg:w-4/5">
          <SelectedFilters gender={gender} setGender={setGender} species={species} setSpecies={setSpecies} sign={sign} setSign={setSign} />
          {
            loading ? (<Loading />) :
              (<React.Fragment>
                <motion.div className="flex flex-wrap justify-center md:justify-start gap-5"
                  key={gender + species + sign}
                  variants={villagersContainer}
                  initial="hidden"
                  animate="visible">
                  <VillagerCard results={data[currentPage]} />
                </motion.div>
              </React.Fragment>
              )
          }
        </div>
      </div>
      <Pagination pages={pages} setCurrentPage={setCurrentPage} />
    </div>
  )
}
