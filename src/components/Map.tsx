import { useQuery } from "react-query";
import { fetchLocations } from "../lib/api/location";
import { Location } from "../lib/interfaces/location";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMyContext } from "../lib/myContext";
import { useEffect, useState } from "react";
import L from "leaflet";
import { assignDriverMock, deleteAssignationMock } from "../lib/api/services";

const createCustomIcon = (color: string) => {
  return L.divIcon({
    className: `${color} rounded-full`,
    html: `<div style="width: 4rem; height: 4rem;"></div>`,
  });
};

const Map = () => {
  const { data, isLoading, isError, error } = useQuery<Location[], Error>(
    "locations",
    fetchLocations
  );
  const { selectedDriver } = useMyContext();
  const [selectedLocation, setSelectedLocation] = useState<
    Location | undefined
  >(undefined);
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    if (data) {
      setLocations(data);
    }
  }, [data]);

  useEffect(() => {
    if (selectedLocation && selectedDriver) {
      const updatedLocations = assignDriverMock(
        selectedLocation,
        selectedDriver
      );
      setLocations(updatedLocations);

      setSelectedLocation(undefined);
    }
  }, [selectedLocation, selectedDriver]);

  const handleClick = (location: Location | undefined) => {
    if (location?.driver) {
      const updatedLocations = deleteAssignationMock(location);
      setLocations(updatedLocations);
      setSelectedLocation(undefined);
    } else {
      setSelectedLocation(location);
    }
  };

  const assignDriverColor = (color: string | undefined) => {
    return color ? color : "bg-red-600";
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
        const color = assignDriverColor(location.driver?.color);

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
