import React from "react";

export const links = [
  {
    name: "Home",
    url: "/"
  },
  {
    name: "Villagers",
    url: "/villagers"
  },
  {
    name: "Events",
    url: "/events"
  },
  {
    name: "Selling Items",
    url: "/selling-items"
  }
] as const;

const api = 'https://api.nookipedia.com/';
const apiKey = ""; /*hard coding bc it doesnt work */

/* Api Fetch Internal Function */
async function getData(path) {
  const res = await fetch(api + path, {
    headers: {
      'X-API-KEY': apiKey,
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

/* Pagination Logic -> The API doesn't provide pages. This will divide results into arrays of 10 items */
const paginateItems = (array) => {
  const itemsPerPage = 10;
  const paginated = [];
  if (array && array.length > 0) {
    for (let i = 0; i < array.length; i += itemsPerPage) {
      paginated.push(array.slice(i, i + itemsPerPage));
    }
  }
  return paginated;
};

export const getVillagers = async (search, gender, species, sign) => {
  const villagers = await getData("/villagers");
  if (villagers) {
    const filtered = villagers.filter(
      item => (item['name'].toLowerCase().startsWith(search.toLowerCase())
        && item['gender'].toLowerCase().includes(gender.toLowerCase())
        && item['species'].toLowerCase().includes(species.toLowerCase())
        && item['sign'].toLowerCase().includes(sign.toLowerCase())
      )
    );
    return paginateItems(filtered);
  } else {
    return [];
  }
}