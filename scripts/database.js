const database = {
  venues: [
    {
      id: 1,
      name: "Rockwood Music Hall",
      address: "196 Allen St, New York, NY 10002",
      size: 1847,
      maxOccupancy: 120,
    },
    {
      id: 2,
      name: "(Le) Poisson Rouge",
      address: "158 Bleecker St, New York, NY 10012",
      size: 10000,
      maxOccupancy: 700,
    },
    {
      id: 3,
      name: "The Smell",
      address: "247 Main St, Los Angeles, CA 90012",
      size: 2000,
      maxOccupancy: 130,
    },
    {
      id: 4,
      name: "Troubadour",
      address: "9081 N Santa Monica Blvd, West Hollywood, CA 90069",
      size: 9500,
      maxOccupancy: 500,
    },
    {
      id: 5,
      name: "Schubas Tavern",
      address: "3159 N Southport Ave, Chicago, IL 60657",
      size: 2300,
      maxOccupancy: 200,
    },
    {
      id: 6,
      name: "Metro",
      address: "3730 N Clark St, Chicago, IL 60613",
      size: 100645,
      maxOccupancy: 1100,
    },
    {
      id: 7,
      name: "The Stone Pony",
      address: "913 Ocean Ave N, Ashbury Park, NJ 07712",
      size: 60000,
      maxOccupancy: 850,
    },
    {
      id: 8,
      name: "The Ryman Auditorium",
      address: "116 5th Ave N, Nashville, TN 37219",
      size: 43560,
      maxOccupancy: 2362,
    },
    {
      id: 9,
      name: "Bluebird Cafe",
      address: "4104 Hillsboro Pike, Nashville, TN 37215",
      size: 2000,
      maxOccupancy: 90,
    },
    {
      id: 10,
      name: "The Blind Pig",
      address: "208 S 1st St, Ann Arbor, MI 48104",
      size: 4700,
      maxOccupancy: 400,
    },
    {
      id: 11,
      name: "The Echo",
      address: "1822 Sunset Blvd, Los Angeles, CA 90026",
      size: 4000,
      maxOccupancy: 350,
    },
  ],
  bands: [
    {
      id: 1,
      name: "Helmet Fund",
      members: 2,
      genre: "Indie",
      yearFormed: 2010,
    },
    {
      id: 2,
      name: "Digital Revenge Fantasy",
      members: 8,
      genre: "Polynesian Pop",
      yearFormed: 2023,
    },
    {
      id: 3,
      name: "Pudding Night",
      members: 4,
      genre: "Portland Indie",
      yearFormed: 2022,
    },
    {
      id: 4,
      name: "Electron Bathtub",
      members: 9,
      genre: "EDM",
      yearFormed: 2005,
    },
    {
      id: 5,
      name: "PsychKik",
      members: 1,
      genre: "Rap Criolo",
      yearFormed: 2003,
    },
    {
      id: 6,
      name: "Inappropriate Depression",
      members: 3,
      genre: "Punk",
      yearFormed: 2013,
    },
    {
      id: 7,
      name: "Cucumber Shark Report",
      members: 6,
      genre: "Vegas Indie",
      yearFormed: 2007,
    },
    {
      id: 8,
      name: "Battlefield Preacher",
      members: 3,
      genre: "Blues",
      yearFormed: 2004,
    },
    {
      id: 9,
      name: "Variant Beginnings",
      members: 6,
      genre: "Grindcore",
      yearFormed: 2012,
    },
    {
      id: 10,
      name: "Honest Reptile",
      members: 5,
      genre: "Dance Punk",
      yearFormed: 2015,
    },
    {
      id: 11,
      name: "Worm Appeal",
      members: 3,
      genre: "Dark Wave",
      yearFormed: 2021,
    },
    {
      id: 12,
      name: "Feminist Cell",
      members: 6,
      genre: "Progressive Metal",
      yearFormed: 2018,
    },
    {
      id: 13,
      name: "Concrete Coincidence",
      members: 6,
      genre: "Coldwave",
      yearFormed: 2015,
    },
  ],
  bookings: [
    {
      id: 1,
      bandId: 8,
      venueId: 2,
      date: "2-14-2024",
    },
    {
      id: 2,
      bandId: 10,
      venueId: 1,
      date: "6-16-2024",
    },
    {
      id: 3,
      bandId: 11,
      venueId: 6,
      date: "2-18-2024",
    },
    {
      id: 4,
      bandId: 12,
      venueId: 2,
      date: "9-19-2024",
    },
    {
      id: 5,
      bandId: 8,
      venueId: 9,
      date: "11-3-2024",
    },
    {
      id: 6,
      bandId: 5,
      venueId: 9,
      date: "8-14-2024",
    },
    {
      id: 7,
      bandId: 11,
      venueId: 10,
      date: "1-6-2025",
    },
    {
      id: 8,
      bandId: 6,
      venueId: 5,
      date: "12-14-2024",
    },
    {
      id: 9,
      bandId: 8,
      venueId: 10,
      date: "1-13-2025",
    },
    {
      id: 10,
      bandId: 1,
      venueId: 3,
      date: "9-9-2025",
    },
    {
      id: 11,
      bandId: 4,
      venueId: 10,
      date: "3-21-2025",
    },
    {
      id: 12,
      bandId: 3,
      venueId: 4,
      date: "4-10-2025",
    },
    {
      id: 13,
      bandId: 7,
      venueId: 7,
      date: "5-23-2025",
    },
    {
      id: 14,
      bandId: 2,
      venueId: 3,
      date: "4-19-2025",
    },
    {
      id: 15,
      bandId: 3,
      venueId: 8,
      date: "4-29-2025",
    },
    {
      id: 16,
      bandId: 9,
      venueId: 2,
      date: "11-7-2025",
    },
    {
      id: 17,
      bandId: 1,
      venueId: 8,
      date: "5-16-2026",
    },
  ],
};

export const getBands = () => {
  return database.bands.map((band) => ({ ...band }));
};

export const getVenues = () => {
  return database.venues.map((venue) => ({ ...venue }));
};

export const getBookings = () => {
  return database.bookings.map((booking) => ({ ...booking }));
};
