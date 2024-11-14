import Card from "./Card";
import backgroundImage from "../background.jpg"; // Adjust the path as needed

const Weather = ({ weatherData }) => {
  const filteredSols = Object.keys(weatherData).filter((sol) => {
    const solNumber = parseInt(sol.replace("sol", ""));
    return solNumber >= 675 && solNumber <= 681;
  });

  return (
    <div
      id="mars-weather"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "nowrap",
        overflowX: "auto",
        gap: "10px",
        width: "85%",
        height: "700px",
        textAlign: "center",
        margin: "50px auto",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
      }}
    >
      <h1 className="text-white text-[50px]">Mars Weather Data</h1>
      <p className="text-white text-[20px] font-light w-2/4">
        Currently fetching the latest data available. As soon as NASA releases
        updated information, it will be displayed here automatically, ensuring
        you have access to the most recent insights.
      </p>
      <div className="flex ">
        {filteredSols.map((sol) => (
          <Card key={sol} sol={sol} data={weatherData[sol]} />
        ))}
      </div>
    </div>
  );
};

export default Weather;
