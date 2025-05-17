'use client';

import dynamic from 'next/dynamic';
import { type Location } from './Map';

// Sample locations in Boston area
const locations: Location[] = [
  {
    id: 1,
    name: 'Moldova',
    position: [47.003670, 28.907089] as [number, number],
    description: 'Moldova',
  },
  {
    id: 2,
    name: 'Romania',
    position: [46, 25] as [number, number],
    description: 'Romania',
  },
  {
    id: 3,
    name: 'Bulgaria Common',
    position: [42.7339, 25.4858] as [number, number],
    description: "Bulgaria",
  },
  {
    id: 4,
    name: 'Czechia Common',
    position: [49.8175, 15.4730] as [number, number],
    description: "Czechia",
  },
  
  // {
  //   id: 4,
  //   name: 'MIT',
  //   position: [42.3601, -71.0942] as [number, number],
  //   description: 'Massachusetts Institute of Technology',
  // },
  // {
  //   id: 5,
  //   name: 'New England Aquarium',
  //   position: [42.3592, -71.0495] as [number, number],
  //   description: 'Marine life and exhibits',
  // },
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
