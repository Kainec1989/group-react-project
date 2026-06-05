import { useState, useEffect, useCallback } from "react";
import { PlanetContext } from "./PlanetContext";
import { fetchPlanetData as fetchPlanetDataApi } from "../api/apiNinjas";
import { planets } from "../constants";

const planetNames = new Set(Object.values(planets).map((p) => p.name));

export default function PlanetProvider({ children }) {
  const [page, setPage] = useState("");
  const [planetData, setPlanetData] = useState(null);
  const [error, setError] = useState(null);

  const fetchPlanetData = useCallback(async (planetName) => {
    setError(null);
    setPlanetData(null);

    try {
      const data = await fetchPlanetDataApi(planetName);
      setPlanetData(data);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  useEffect(() => {
    if (!page || !planetNames.has(page)) {
      setPlanetData(null);
      setError(null);
      return;
    }

    let cancelled = false;
    setPlanetData(null);
    setError(null);

    fetchPlanetDataApi(page)
      .then((data) => {
        if (!cancelled) setPlanetData(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      });

    return () => {
      cancelled = true;
    };
  }, [page]);

  return (
    <PlanetContext.Provider
      value={{ page, setPage, planetData, error, fetchPlanetData }}
    >
      {children}
    </PlanetContext.Provider>
  );
}
