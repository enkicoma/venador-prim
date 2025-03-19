"use client";

import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// Fix for default marker icon
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = new Icon({
  iconUrl: (icon as unknown) as string,
  shadowUrl: (iconShadow as unknown) as string,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Sample locations in Boston area
const locations = [
  {
    id: 1,
    name: "Harvard University",
    position: [42.377, -71.1167],
    description: "Prestigious university in Cambridge",
  },
  {
    id: 2,
    name: "Fenway Park",
    position: [42.3467, -71.0972],
    description: "Historic baseball park",
  },
  {
    id: 3,
    name: "Boston Common",
    position: [42.3554, -71.0655],
    description: "America's oldest public park",
  },
  {
    id: 4,
    name: "MIT",
    position: [42.3601, -71.0942],
    description: "Massachusetts Institute of Technology",
  },
  {
    id: 5,
    name: "New England Aquarium",
    position: [42.3592, -71.0495],
    description: "Marine life and exhibits",
  },
];

function ProjectMap() {
  return (
    <div className="min-h-[400px]">
      <div className="p-4 mx-auto container">
        <div className="h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-xl">
          <MapContainer
            center={[42.3601, -71.0589]}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map((location) => (
              <Marker
                key={location.id}
                position={location.position as [number, number]}
                icon={defaultIcon}
              >
                <Popup>
                  <div className="p-2">
                    <h3 className="font-bold text-lg">{location.name}</h3>
                    <p className="text-gray-600">{location.description}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default ProjectMap;
