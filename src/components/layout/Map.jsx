import React, { useRef, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const locations = [
  {
    id: 1,
    name: "Sucursal Sarmiento",
    position: { lat: -34.610605, lng: -58.399986 },
  },
  {
    id: 2,
    name: "Sucursal Castelli",
    position: { lat: -34.609611, lng: -58.398471 },
  },
];

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -34.610108,
  lng: -58.399228,
};

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && locations.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      locations.forEach((location) => bounds.extend(location.position));
      mapRef.current.fitBounds(bounds);
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={14}
        onLoad={(map) => (mapRef.current = map)}
      >
        {locations.map((location) => (
          <Marker key={location.id} position={location.position} title={location.name} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
