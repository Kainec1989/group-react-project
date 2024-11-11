const navLinks = [
  { name: "Mercury", path: "/mercury" },
  { name: "Venus", path: "/venus" },
  { name: "Home", path: "/" },
  { name: "Mars", path: "/mars" },
  { name: "Jupiter", path: "/jupiter" },
  { name: "Saturn", path: "/saturn" },
  { name: "Uranus", path: "/uranus" },
  { name: "Neptune", path: "/neptune" },
];

const navStyles = {
  Earth:
    "px-10 z-10 bg-gradient-to-l from-emerald-500 to-blue-700 p-4 w-full flex justify-between",
  Mercury:
    "px-10 z-10 bg-gradient-to-l from-slate-300 to-slate-600 p-4 w-full flex justify-between",
  Venus:
    "px-10 z-10 bg-gradient-to-l from-amber-200 to-amber-400 p-4 w-full flex justify-between",
  Mars: "px-10 z-10 bg-gradient-to-l from-orange-200 to-orange-900 p-4 w-full flex justify-between",
  Jupiter:
    "px-10 z-10 bg-gradient-to-l from-orange-100 to-yellow-700 p-4 w-full flex justify-between",
  Saturn:
    "px-10 z-10 bg-gradient-to-l from-neutral-300 to-[#BCB095] p-4 w-full flex justify-between",
  Uranus:
    "px-10 z-10 bg-gradient-to-l from-teal-600 to-cyan-700 p-4 w-full flex justify-between",
  Neptune:
    "px-10 z-10 bg-gradient-to-l from-blue-400 to-blue-800 p-4 w-full flex justify-between",
};

export { navLinks, navStyles };
