# SpaceVoyage

Interactive web app about the Solar System: 3D planet models, live weather data, and NASA's Astronomy Picture of the Day.

## Features

- **3D planets** — explore Mercury through Neptune with React Three Fiber
- **Planet data** — distance, mass, temperature, orbit (API Ninjas + local fallback)
- **Earth weather** — search any city via OpenWeatherMap
- **Mars weather** — archived InSight lander data at Elysium Planitia
- **APOD** — daily astronomy image from NASA
- **Responsive UI** — mobile-friendly navigation and layouts

## Tech Stack

- React 18 + Vite 5
- React Router 6
- Three.js / React Three Fiber
- Tailwind CSS + Framer Motion
- Vitest + Testing Library

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
git clone <repository-url>
cd group-react-project
npm install
```

### Environment Variables

```bash
cp .env.example .env
```

Fill in your API keys:

| Variable | Service | Get key |
|----------|---------|---------|
| `VITE_NASA_API_KEY` | NASA APOD & Mars weather | [api.nasa.gov](https://api.nasa.gov/) |
| `VITE_API_NINJAS_KEY` | Planet statistics | [api-ninjas.com](https://api-ninjas.com/) |
| `VITE_OPENWEATHER_KEY` | Earth weather | [openweathermap.org](https://openweathermap.org/api) |

> NASA and API Ninjas keys may take a few minutes to activate after registration. The app uses fallback data when APIs are unavailable.

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode |

## Project Structure

```
src/
  api/           # NASA, API Ninjas, OpenWeather clients
  components/    # UI and 3D canvas components
  constants/     # Planet config, nav, fallback data
  context/       # PlanetContext provider
  hooks/         # useApod, useMarsWeather, useHashScroll
  pages/         # Route pages
  utils/         # Router, reducers, helpers
  assets/images/ # Static images
public/          # 3D models (GLTF)
```

## Routes

| Path | Page |
|------|------|
| `/` | Galaxy (home) |
| `/earth` | Earth + weather |
| `/mars` | Mars + InSight weather |
| `/mercury` … `/neptune` | Other planets |
| `/apod` | Astronomy Picture of the Day |
| `*` | 404 |

## Deployment

### Vercel

1. Push to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Add environment variables (`VITE_NASA_API_KEY`, etc.)
4. Deploy — `vercel.json` handles SPA routing

### Netlify

1. Push to GitHub
2. Import on [netlify.com](https://netlify.com)
3. Build command: `npm run build`, publish directory: `dist`
4. Add environment variables in site settings
5. `public/_redirects` handles SPA routing

### Manual

```bash
npm run build
# serve the dist/ folder with any static host
```

## CI

GitHub Actions runs on every push and pull request:

- ESLint
- Vitest (20 tests)
- Production build

See `.github/workflows/ci.yml`

## License

Educational group project — DCI.
