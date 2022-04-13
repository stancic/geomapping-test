import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface MapData {
  id: number;
  id_map: string;
  name: string;
  org_code: string;
}

const MapNoSSR = () => {
  const [mapData, setMapData] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const multiPolygon = [
    [
      [51.51, -0.12],
      [51.51, -0.13],
      [51.53, -0.13],
    ],
    [
      [51.51, -0.05],
      [51.51, -0.07],
      [51.53, -0.07],
    ],
  ];

  useEffect(() => {
    async function dataFetch() {
      const response = await fetch(
        'http://martinjc.github.io/UK-GeoJSON/json/eng/topo_lad.json'
      );
      const data = await response.json();

      setMapData(data);
    }
    dataFetch();
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  console.log(mapData);

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
      <Polygon positions={multiPolygon} />
    </MapContainer>
  );
};

export default MapNoSSR;
