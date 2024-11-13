import { createContext, useState, useEffect } from "react";

export const MyContext = createContext();

export default function MyContextProvider({ children }) {
  const [page, setPage] = useState("");
  const [planetData, setPlanetData] = useState(null);
  const [error, setError] = useState(null);

  // Fetch function to get data for a specific planet
  const fetchPlanetData = async (planetName) => {
    setError(null);
    setPlanetData(null); // Clear previous data

    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/planets?name=${planetName}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": "8klaizmDraYODCbJkTg/Rw==0noC2QJHrTuUJRM4", // Replace with your actual API key
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPlanetData(data);
    } catch (error) {
      setError(error.message);
    }
  };

  // Use `useEffect` to fetch data automatically when `page` changes
  useEffect(() => {
    if (page) {
      fetchPlanetData(page);
    }
  }, [page]);

  return (
    <MyContext.Provider
      value={{ page, setPage, planetData, error, fetchPlanetData }}
    >
      {children}
    </MyContext.Provider>
  );
}
