import axios from "axios";
import { getLocationsMock } from "../mocks/locationMock";
import { Location } from "../interfaces/location";

const isMock = import.meta.env.VITE_MOCK === "true";

export const fetchLocations = async (): Promise<Location[]> => {
  if (isMock) {
    return await getLocationsMock();
  }

  const response = await axios.get<Location[]>(
    `${import.meta.env.VITE_API_ENDPOINT}/locations`
  );
  return response.data;
};
