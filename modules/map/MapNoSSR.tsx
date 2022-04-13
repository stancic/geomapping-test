import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Region } from './components';

const MapNoSSR = () => {
  const [mapData, setMapData] = useState<MapData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function dataFetch() {
      const response = await fetch(
        'http://dinomapping.herokuapp.com/maps/all/'
      );
      const data = await response.json();

      setMapData(data);
    }
    dataFetch();
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) return null;

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
