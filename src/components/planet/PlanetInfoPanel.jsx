import { navStyles } from "../../constants";

function PlanetInfoPanel({ page, planetData, error }) {
  if (error) {
    return (
      <div className="w-full lg:w-1/3 text-red-300 p-6 rounded-lg bg-red-900/20 border border-red-400/30">
        <p>Failed to load planet data: {error}</p>
      </div>
    );
  }

  if (!planetData) {
    return (
      <div className="w-full lg:w-1/3 flex items-center justify-center p-6">
        <div className="animate-pulse text-white/70">Loading planet data...</div>
      </div>
    );
  }

  const data = planetData[0];
  const panelStyle = navStyles[page]?.split(" ").slice(0, 3).join(" ") ?? "";

  return (
    <div
      className={`w-full lg:w-1/3 rounded-xl p-6 m-0 lg:m-4 ${panelStyle}`}
    >
      <hr className="border-white border w-full" />
      <div className="text-white my-5 space-y-2 text-sm md:text-base">
        <p>
          <span className="text-white/80">Distance (Light Years):</span>{" "}
          {data.distance_light_year}
        </p>
        <p>
          <span className="text-white/80">Mass (relative to Earth):</span>{" "}
          {typeof data.mass === "number" ? data.mass.toFixed(2) : data.mass}
        </p>
        <p>
          <span className="text-white/80">Radius (AU):</span> {data.radius}
        </p>
        <p>
          <span className="text-white/80">Orbit Period (days):</span>{" "}
          {data.period}
        </p>
        <p>
          <span className="text-white/80">Semi-Major Axis:</span>{" "}
          {data.semi_major_axis}
        </p>
        <p>
          <span className="text-white/80">Planet Temperature:</span>{" "}
          {(data.temperature - 273.1).toFixed(1)} °C
        </p>
      </div>
      <hr className="border-white border w-full" />
      <div className="text-white my-4 space-y-2 text-sm md:text-base">
        <h3 className="text-lg font-semibold">Host Star: Sun</h3>
        <p>
          <span className="text-white/80">Mass:</span> {data.host_star_mass}
        </p>
        <p>
          <span className="text-white/80">Temperature:</span>{" "}
          {data.host_star_temperature - 273.1} °C
        </p>
      </div>
      <hr className="border-white border w-full" />
    </div>
  );
}

export default PlanetInfoPanel;
