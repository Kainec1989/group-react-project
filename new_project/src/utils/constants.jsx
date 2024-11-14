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

const planetDescription = {
  Earth:
    "Our blue planet, teeming with life and water, has diverse ecosystems, from deep oceans to towering mountains. Earth's atmosphere and perfect distance from the sun create a habitable environment that supports complex ecosystems and human civilization.",
  Mercury:
    "The closest planet to the sun, Mercury is a small, rocky world with extreme temperatures. It has a cratered surface, similar to our moon, and no atmosphere to retain heat, leading to scorching days and freezing nights.",
  Venus:
    "A hot, cloud-covered planet with a dense atmosphere rich in sulfuric acid. Venus has a volcanic landscape and is often called Earth’s twin due to its similar size, but its extreme greenhouse effect makes it the hottest planet in the solar system.",
  Mars: "The Red Planet, known for its iron-rich soil that gives it a reddish hue. Mars has vast deserts, towering volcanoes, and the largest canyon in the solar system, with evidence suggesting it may have once had water and potentially even microbial life.",
  Jupiter:
    "The largest planet in the solar system, a gas giant with thick bands of clouds and powerful storms, including the Great Red Spot. Jupiter has a strong magnetic field and dozens of moons, some of which may harbor oceans beneath their icy surfaces.",
  Saturn:
    "Famous for its spectacular ring system, Saturn is a gas giant with a pale yellow hue and an intricate system of icy rings. Known for its low density and gentle atmosphere, Saturn is orbited by unique moons with interesting geological features.",
  Uranus:
    "An ice giant with a pale blue-green color due to methane in its atmosphere. Uranus has an unusual axial tilt, causing it to rotate on its side, and has faint rings and a cold, windy atmosphere.",
  Neptune:
    "A distant, deep blue ice giant with supersonic winds and massive storms. Neptune has a dynamic atmosphere, and its largest moon, Triton, has geysers that suggest the presence of subsurface oceans.",
};

export { navLinks, navStyles, planetDescription };
