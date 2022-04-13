interface MapData {
  id: number;
  id_map: string;
  name: string;
  org_code: string;
  region: import('react-leaflet').GeoJSONProps['data'];
}
