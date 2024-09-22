import DriversList from "./DriversList";
import Map from "./Map";

const Main = () => {
  return (
    <>
      <main className="relative flex flex-col h-auto bg-gray-200 md:flex-row">
        <DriversList />
        <div className="flex-1">
          <Map />
        </div>
      </main>
    </>
  );
};

export default Main;
