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

export const listGenders = ['Female', 'Male'] as const;
export const listSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio',
  'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'] as const;
export const listSpecies = ['Alligator', 'Anteater', 'Bear', 'Bear cub', 'Bird', 'Bull', 'Cat', 'Cub', 'Chicken',
  'Cow', 'Deer', 'Dog', 'Duck', 'Eagle', 'Elephant', 'Frog', 'Goat', 'Gorilla', 'Hamster',
  'Hippo', 'Horse', 'Koala', 'Kangaroo', 'Lion', 'Monkey', 'Mouse', 'Octopus', 'Ostrich',
  'Penguin', 'Pig', 'Rabbit', 'Rhino', 'Rhinoceros', 'Sheep', 'Squirrel', 'Tiger', 'Wolf'] as const;

const api = 'https://api.nookipedia.com/';
const apiKey = process.env.NEXT_PUBLIC_NOOKIPEDIA_API_KEY;

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
  let width = window.innerWidth;

  const itemsPerPage = () => {
    if (width <= 576) { /*sm or lower */
      return 6;
    } else if (width <= 1024) { /*md or lower */
      return 10;
    } else { /*higher than md */
      return 9;
    }
  };

  const paginated = [];
  if (array && array.length > 0) {
    const itemsPerPageValue = itemsPerPage();
    for (let i = 0; i < array.length; i += itemsPerPageValue) {
      paginated.push(array.slice(i, i + itemsPerPageValue));
    }
  }
  return paginated;
};

export const getVillagers = async (search, gender, species, sign) => {
  const villagers = await getData("/villagers");
  if (villagers) {
    const filtered = villagers.filter(
      item => (item['name'].toLowerCase().startsWith(search.toLowerCase())
        && item['gender'].startsWith(gender)
        && item['sign'].includes(sign)
        && (species.length > 0 ? (item['species'] === (species)) : 'true')
      )
    );
    return paginateItems(filtered);
  } else {
    return [];
  }
}

export const months = [
  { month: "January", monthId: "01" },
  { month: "February", monthId: "02" },
  { month: "March", monthId: "03" },
  { month: "April", monthId: "04" },
  { month: "May", monthId: "05" },
  { month: "June", monthId: "06" },
  { month: "July", monthId: "07" },
  { month: "August", monthId: "08" },
  { month: "September", monthId: "09" },
  { month: "October", monthId: "10" },
  { month: "November", monthId: "11" },
  { month: "December", monthId: "12" },
] as const;