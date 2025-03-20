'use client';

import dynamic from 'next/dynamic';
import { type Location } from './Map';

// Sample locations in Boston area
const locations: Location[] = [
  {
    id: 1,
    name: 'Harvard University',
    position: [42.377, -71.1167] as [number, number],
    description: 'Prestigious university in Cambridge',
  },
  {
    id: 2,
    name: 'Fenway Park',
    position: [42.3467, -71.0972] as [number, number],
    description: 'Historic baseball park',
  },
  {
    id: 3,
    name: 'Boston Common',
    position: [42.3554, -71.0655] as [number, number],
    description: "America's oldest public park",
  },
  {
    id: 4,
    name: 'MIT',
    position: [42.3601, -71.0942] as [number, number],
    description: 'Massachusetts Institute of Technology',
  },
  {
    id: 5,
    name: 'New England Aquarium',
    position: [42.3592, -71.0495] as [number, number],
    description: 'Marine life and exhibits',
  },
];

// Dynamically import the Map component with all its dependencies
const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="min-h-[400px] bg-gray-100 animate-pulse rounded-lg" />
  ),
});

function ProjectMap() {
  return (
    <div className="min-h-[400px]">
      <div className="p-4 mx-auto container">
        <div className="h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-xl">
          <Map locations={locations} />
        </div>
      </div>
    </div>
  );
}

export default ProjectMap;
