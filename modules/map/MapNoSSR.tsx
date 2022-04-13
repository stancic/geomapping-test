import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Region } from './components';

interface Props {
  mapData: MapData[];
}

const MapNoSSR: React.FC<Props> = ({ mapData }) => {
  if (!mapData) return <h1>Loading...</h1>;

  return (
    <MapContainer
      center={[54.5, -3]}
      zoom={6}
      minZoom={6}
      style={{ width: '800px', height: '800px' }}
      boundsOptions={{ padding: [50, 50] }}
    >
      <TileLayer
        attribution='<href="https://www.maptiler.com/copyright/" target="_blank">MapTiler</a>|<a href="https://www.openstreetmap.org/copyright\" target="_blank">OpenStreetMap contributors</a>'
        url='https://api.maptiler.com/maps/bright/{z}/{x}/{y}.png?key=cnOAqKquJXFHWgw6xeye'
      />
      {mapData.map((data) => (
        <Region key={data.id_map} mapData={data} />
      ))}
    </MapContainer>
  );
};

export default MapNoSSR;
