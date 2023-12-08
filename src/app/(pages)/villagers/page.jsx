"use client";

import React, { useEffect, useState } from 'react'
import { getVillagers } from '../../../../lib/data.ts'
import Loading from '@/components/loading.jsx';
import VillagerCard from './villagerCard.jsx';

export default function Villagers() {

  const [loading, setLoading] = useState();
  const [data, setData] = useState([]);
  const [pages, setPages] = useState();
  const [currentPage, setCurrentPage] = useState(0);

  const [search, setSearch] = useState('');
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');
  const [sign, setSign] = useState('');

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
        console.error('Error fetching villagers:', error);
      }
      setLoading(false);
    };
    getData();
  }, [search, gender, species, sign]);

  return (
    <div className='my-3 md:my-6'>
      <div id="title" className='text-red-300 text-center text-5xl font-bold mb-5'>
        <h1>Villagers</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        {
          loading ? (<Loading />) : (<VillagerCard results={data[currentPage]} />)
        }
      </div>
    </div>
  )
}
