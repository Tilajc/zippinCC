import { locations } from "../mocks/locationMock";
import { Location } from "../interfaces/location";
import { Driver } from "../interfaces/driver";

export const assignDriverMock = (
  location: Location,
  driver: Driver | undefined
): Location[] => {
  const locationIndex = locations.findIndex(
    (locat) => locat.id === location.id
  );

  if (locationIndex !== -1) {
    locations[locationIndex].driver = driver;
  }

  return [...locations];
};

export const deleteAssignationMock = (location: Location): Location[] => {
  const locationIndex = locations.findIndex(
    (locat) => locat.id === location.id
  );

  if (locationIndex !== -1) {
    locations[locationIndex].driver = undefined;
  }

  return [...locations];
};
