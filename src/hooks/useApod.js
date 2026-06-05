import { useReducer, useEffect } from "react";
import { initialState, reducer } from "../utils/apodReducer";
import { fetchApod } from "../api/nasa";

export function useApod() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchApod()
      .then((data) => dispatch({ type: "FETCH_SUCCESS", payload: data }))
      .catch((error) => dispatch({ type: "FETCH_ERROR", payload: error }));
  }, []);

  return state;
}
