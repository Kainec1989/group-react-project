import { motion } from "framer-motion";
import { formatSolDate, formatTemperature, getSolHighLow } from "../utils/marsWeather";

const Card = ({ solKey, data, unit, isLatest }) => {
  const solNumber = solKey.replace("sol", "");
  const { high, low } = getSolHighLow(data);
  const date = formatSolDate(data);

  return (
    <motion.div
      className={`min-w-[130px] flex-1 rounded-lg px-4 py-5 text-center text-white backdrop-blur-sm ${
        isLatest
          ? "bg-black/60 ring-2 ring-orange-400/50"
          : "bg-black/45 hover:bg-black/55"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <p className="text-lg font-semibold">Sol {solNumber}</p>
      {date && <p className="text-sm text-white/70 mb-3">({date})</p>}
      <div className="space-y-1 text-sm">
        <p>
          <span className="text-white/80">High:</span>{" "}
          {formatTemperature(high, unit)}
        </p>
        <p>
          <span className="text-white/80">Low:</span>{" "}
          {formatTemperature(low, unit)}
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
