import { Driver } from "../../lib/interfaces/driver";

const DriverCard = ({ id, name, lastName, profileImg, color }: Driver) => {
  return (
    <div
      key={id}
      className={`flex items-center w-36 rounded-md p-2 ${color} md:w-40`}
    >
      <img
        src={profileImg}
        alt="profile picture"
        className="inline-block mr-2"
      />
      <div className="flex flex-wrap">
        <span className="mr-1">{lastName}</span>
        <span>{name}</span>
      </div>
    </div>
  );
};

export default DriverCard;
