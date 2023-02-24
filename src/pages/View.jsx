import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import '../style/View.css'

export default function View() {
  return (
  <>
    <h1>View</h1>
    <MapContainer className='map' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
  </>
  );
}