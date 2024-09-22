import axios from "axios";
import { getDriversMock } from "../mocks/driverMock";
import { Driver } from "../interfaces/driver";

const isMock = import.meta.env.VITE_MOCK === "true";

export const fetchDrivers = async (): Promise<Driver[]> => {
  if (isMock) {
    return await getDriversMock();
  }

  const response = await axios.get<Driver[]>(
    `${import.meta.env.VITE_API_ENDPOINT}/drivers`
  );
  return response.data;
};
