import Card from "./Card";
import backgroundImage from "../../assets/background.jpg"; // Adjust the path as needed

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
        gap: "10px",
        height: "30vh",
        textAlign: "left",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",

      }}
    >
      {filteredSols.map((sol) => (
        <Card key={sol} sol={sol} data={weatherData[sol]} />
      ))}
    </div>
  );
};

export default Weather;
