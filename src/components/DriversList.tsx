import { useQuery } from "react-query";
import DriverCard from "./shared/DriverCard";
import { fetchDrivers } from "../lib/api/driver";
import { Driver } from "../lib/interfaces/driver";

const DriversList = () => {
  const { data, isLoading, isError, error } = useQuery<Driver[], Error>(
    "drivers",
    fetchDrivers
  );

  if (isLoading) {
    return <div>Loading drivers...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="m-8">
        <h2 className="mb-4 text-xl">Drivers</h2>
        <div className="flex flex-wrap justify-center gap-4 w-full md:flex-col">
          {data?.map((driver) => (
            <DriverCard
              id={driver.id}
              name={driver.name}
              lastName={driver.lastName}
              profileImg={driver.profileImg}
              color={driver.color}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DriversList;
