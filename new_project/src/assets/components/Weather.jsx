import Card from "./Card";

const Weather = ({ weatherData }) => {
  const filteredSols = Object.keys(weatherData).filter((sol) => {
    const solNumber = parseInt(sol.replace("sol", ""));
    return solNumber >= 675 && solNumber <= 681;
  });

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "nowrap",
        overflowX: "auto",
        color: "orange",
        gap: "10px",
        width: "100vw",
        textAlign: "left",
      }}
    >
      {filteredSols.map((sol) => (
        <Card key={sol} sol={sol} data={weatherData[sol]} />
      ))}
    </div>
  );
};

export default Weather;
