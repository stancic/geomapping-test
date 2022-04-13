import React from 'react';
import { GeoJSON, Popup } from 'react-leaflet';

interface Props {
  mapData: MapData;
}

export const Region: React.FC<Props> = ({ mapData }) => {
  if (!mapData) return null;

  return (
    <GeoJSON data={mapData.region}>
      <Popup>{mapData.name}</Popup>
    </GeoJSON>
  );
};
