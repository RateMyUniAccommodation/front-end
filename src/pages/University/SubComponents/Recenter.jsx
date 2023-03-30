import { useMap } from 'react-leaflet';

const Recenter = ({ coordinates, zoom }) => {
    const map = useMap();
    map.setZoom(zoom);
    map.setView(coordinates);
    return null;
  }

export default Recenter;
