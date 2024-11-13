import React from "react";
import { motion } from "framer-motion";

const Card = ({ sol, data }) => {
  const temperature = data?.AT?.av ?? "N/A";
  const windSpeed = data?.HWS?.av ?? "N/A";
  const pressure = data?.PRE?.av ?? "N/A";

  return (
    <motion.div
      style={{
        cursor: "pointer",
        margin: "10px",
        padding: "10px",
        border: "1px solid orange",
        flex: "1 1 calc(25% - 20px)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "25vh",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      //transition={{ duration: 0.5, delay: parseInt(sol.replace("sol", "")) * 0.1 }}
      onClick={() => alert(`Sol ${sol} clicked!`)}
    >
      <h2>Sol {sol}</h2>
      <p>Temperature: {temperature} °C</p>
      <p>Wind Speed: {windSpeed} m/s</p>
      <p>Pressure: {pressure} Pa</p>
    </motion.div>
  );
};

export default Card;