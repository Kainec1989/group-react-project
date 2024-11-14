import { createContext, useState, useEffect } from "react";

export const MyContext = createContext();

export default function MyContextProvider({ children }) {
  const [page, setPage] = useState("");
  const [planetData, setPlanetData] = useState(null);
  const [error, setError] = useState(null);

  const fetchPlanetData = async (planetName) => {
    setError(null);
    setPlanetData(null);

    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/planets?name=${planetName}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": "8klaizmDraYODCbJkTg/Rw==0noC2QJHrTuUJRM4",
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
