import { Driver } from "../interfaces/driver";

export const drivers: Driver[] = [
  {
    id: 1,
    name: "Pepe",
    lastName: "Garcia",
    color: "bg-blue-500",
    profileImg: "src/assets/Profile1.png",
  },
  {
    id: 2,
    name: "Sol",
    lastName: "Lopez",
    color: "bg-teal-500",
    profileImg: "src/assets/Profile2.png",
  },
  {
    id: 3,
    name: "Jhon",
    lastName: "Doe",
    color: "bg-green-500",
    profileImg: "src/assets/Profile3.png",
  },
  {
    id: 4,
    name: "Fernando",
    lastName: "Lopez",
    color: "bg-purple-500",
    profileImg: "src/assets/Profile4.png",
  },
  {
    id: 5,
    name: "Jhane",
    lastName: "Doe",
    color: "bg-orange-500",
    profileImg: "src/assets/Profile5.png",
  },
];

export const getDriversMock = async (): Promise<Driver[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(drivers);
    }, 1000);
  });
};
