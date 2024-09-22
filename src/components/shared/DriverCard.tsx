import { useMyContext } from "../../lib/myContext";
import { Driver } from "../../lib/interfaces/driver";

const DriverCard = (driver: Driver) => {
  const { selectedDriver, setSelectedDriver } = useMyContext();

  const handleClick = () => {
    if (selectedDriver?.id === driver.id) {
      setSelectedDriver(undefined);
    } else {
      setSelectedDriver(driver);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`flex w-36 rounded-md cursor-pointer transition duration-700 ease-in-out md:w-40 ${
        selectedDriver?.id === driver.id
          ? `${driver.color}`
          : "bg-gray-300 hover:bg-gray-400"
      }`}
    >
      <div className={`w-4 h-16 rounded-md ${driver.color}`}></div>
      <div className={`flex items-center w-32 rounded-md p-2 md:w-36`}>
        <img
          src={driver.profileImg}
          alt="profile picture"
          className="inline-block mr-2"
        />
        <div className="flex flex-wrap">
          <span className="mr-1">{driver.lastName}</span>
          <span>{driver.name}</span>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
