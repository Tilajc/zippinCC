import { useQuery } from "react-query";
import { fetchLocations } from "../lib/api/location";
import { Location } from "../lib/interfaces/location";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMyContext } from "../lib/myContext";
import { useState } from "react";
import L from "leaflet";
import { assignDriverMock, deleteAssignationMock } from "../lib/api/services";

const createCustomIcon = (color: string) => {
  return L.divIcon({
    className: `${color} rounded-full`,
    html: `<div></div>`,
  });
};

const Map = () => {
  const { isLoading, isError, error } = useQuery<Location[], Error>(
    "locations",
    fetchLocations,
    {
      onSuccess: (data) => {
        if (data) {
          setLocations(data);
        }
      },
    }
  );
  const { selectedDriver } = useMyContext();
  const [locations, setLocations] = useState<Location[]>([]);

  const handleClick = (location: Location | undefined) => {
    if (selectedDriver) {
      if (location?.driver) {
        const updatedLocations = deleteAssignationMock(location);
        setLocations(updatedLocations);
      } else {
        const updatedLocations = assignDriverMock(location, selectedDriver);
        setLocations(updatedLocations);
      }
    }
  };

  if (isLoading) {
    return <div className="absolute top-0 right-0">Loading...</div>;
  }

  if (isError) {
    const errorMessage = error?.message;
    return <div className="absolute top-0 right-0">Error: {errorMessage}</div>;
  }

  return (
    <MapContainer
      center={[-34.603722, -58.381592]}
      zoom={13}
      className="w-full h-full"
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://carto.com/">CartoDB</a> contributors'
      />

      {locations?.map((location) => {
        const color = location.driver ? location.driver.color : "bg-red-600";

        return (
          <Marker
            key={location.id}
            position={[location.lat, location.lng]}
            icon={createCustomIcon(color)}
            eventHandlers={{
              click: () => handleClick(location),
            }}
          ></Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
