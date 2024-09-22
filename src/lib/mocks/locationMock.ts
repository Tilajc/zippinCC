import { Location } from "../interfaces/location";

export const locations: Location[] = [
  {
    id: 1,
    lat: -34.603722,
    lng: -58.381592,
    driver: undefined,
  },
  {
    id: 2,
    lat: -34.615852,
    lng: -58.433298,
    driver: undefined,
  },
  {
    id: 3,
    lat: -34.589757,
    lng: -58.392885,
    driver: undefined,
  },
  {
    id: 4,
    lat: -34.634915,
    lng: -58.364423,
    driver: undefined,
  },
  {
    id: 5,
    lat: -34.611325,
    lng: -58.371648,
    driver: undefined,
  },
  {
    id: 6,
    lat: -34.608034,
    lng: -58.371706,
    driver: undefined,
  },
  {
    id: 7,
    lat: -34.609447,
    lng: -58.395883,
    driver: undefined,
  },
  {
    id: 8,
    lat: -34.640252,
    lng: -58.448395,
    driver: undefined,
  },
  {
    id: 9,
    lat: -34.655511,
    lng: -58.392526,
    driver: undefined,
  },
  {
    id: 10,
    lat: -34.617333,
    lng: -58.445198,
    driver: undefined,
  },
  {
    id: 11,
    lat: -34.61814,
    lng: -58.453136,
    driver: undefined,
  },
  {
    id: 12,
    lat: -34.636266,
    lng: -58.43482,
    driver: undefined,
  },
  {
    id: 13,
    lat: -34.590883,
    lng: -58.436674,
    driver: undefined,
  },
  {
    id: 14,
    lat: -34.612031,
    lng: -58.438252,
    driver: undefined,
  },
  {
    id: 15,
    lat: -34.603543,
    lng: -58.431185,
    driver: undefined,
  },
  {
    id: 16,
    lat: -34.597493,
    lng: -58.369696,
    driver: undefined,
  },
  {
    id: 17,
    lat: -34.64557,
    lng: -58.435243,
    driver: undefined,
  },
  {
    id: 18,
    lat: -34.608344,
    lng: -58.364109,
    driver: undefined,
  },
  {
    id: 19,
    lat: -34.626382,
    lng: -58.439499,
    driver: undefined,
  },
  {
    id: 20,
    lat: -34.643055,
    lng: -58.375789,
    driver: undefined,
  },
];

export const getLocationsMock = async (): Promise<Location[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(locations);
    }, 1500);
  });
};
