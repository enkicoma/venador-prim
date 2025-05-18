'use client';

import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export interface Location {
  id: number;
  name: string;
  position: [number, number];
  description: string;
}

interface MapProps {
  locations: Location[];
}

const defaultIcon = new Icon({
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [22, 31],
  iconAnchor: [12, 35],
});

const Map = ({ locations }: MapProps) => {
  return (
    <MapContainer
      center={[50, 15]}
      zoom={5}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={location.position}
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
  );
};

export default Map;
