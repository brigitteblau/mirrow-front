import React, { useRef, useCallback, useEffect } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Loader from "../shared/Loader";
import "../../css/layout/map.css";

const Map = () => {
  const mapRef = useRef(null);

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

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    version: "beta",
  });

  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(() => {
    mapRef.current = null;
  }, []);

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: -34.610605,
    lng: -58.399986,
  };

  useEffect(() => {
    if (isLoaded && mapRef.current) {
      const markers = [];
      locations.forEach((location) => {
        const marker = new google.maps.marker.AdvancedMarkerElement({
          position: location.position,
          map: mapRef.current,
          content: `<div class="custom-marker">${location.name}</div>`, 
        });

        markers.push(marker);
      });

      return () => {
        markers.forEach((marker) => marker.map = null);
      };
    }
  }, [isLoaded, locations]);

  if (!isLoaded) return <Loader />;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
      // mapContainerClassName="map"
    />
  );
};

export default Map;
