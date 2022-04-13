import React from 'react';
import { GeoJSON, Popup } from 'react-leaflet';

interface Props {
  mapData: MapData;
}

export const Region: React.FC<Props> = ({ mapData }) => {
  if (!mapData) return null;

  console.log('region', mapData);

  return (
    <GeoJSON
      data={mapData.region}
      style={{ fillColor: '#fff', color: '#ff3e3e', fillOpacity: 100 }}
    >
      <Popup>{mapData.name}</Popup>
    </GeoJSON>
  );
};
