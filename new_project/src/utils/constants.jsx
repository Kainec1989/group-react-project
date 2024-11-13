const navLinks = [
  { name: "Mercury", path: "/mercury" },
  { name: "Venus", path: "/venus" },
  { name: "Earth", path: "/earth" },
  { name: "Mars", path: "/mars" },
  { name: "Jupiter", path: "/jupiter" },
  { name: "Saturn", path: "/saturn" },
  { name: "Uranus", path: "/uranus" },
  { name: "Neptune", path: "/neptune" },
];

const navStyles = {
  Galaxy:
    "bg-gradient-to-l from-slate-200 to-slate-900  px-10 items-center  p-4 w-full flex justify-between",
  Earth:
    "bg-gradient-to-l from-emerald-500 to-blue-700  px-10 items-center  p-4 w-full flex justify-between",
  Mercury:
    "bg-gradient-to-l from-slate-300 to-slate-600  px-10 items-center  p-4 w-full flex justify-between",
  Venus:
    "bg-gradient-to-l from-amber-200 to-amber-400  px-10 items-center  p-4 w-full flex justify-between",
  Mars: "bg-gradient-to-l from-orange-200 to-orange-900  px-10 items-center  p-4 w-full flex justify-between",
  Jupiter:
    "bg-gradient-to-l from-orange-100 to-yellow-700  px-10 items-center  p-4 w-full flex justify-between",
  Saturn:
    "bg-gradient-to-l from-neutral-300 to-[#BCB095]  px-10 items-center  p-4 w-full flex justify-between",
  Uranus:
    "bg-gradient-to-l from-teal-600 to-cyan-700  px-10 items-center p-4 w-full flex justify-between",
  Neptune:
    "bg-gradient-to-l from-blue-400 to-blue-800  px-10 items-center  p-4 w-full flex justify-between",
  Apod: "bg-gradient-to-l from-red-400 to-grey-800  px-10 items-center  p-4 w-full flex justify-between",
};

export { navLinks, navStyles };
