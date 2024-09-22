import { Driver } from "./driver";

export interface Location {
  id: number;
  lat: number;
  lng: number;
  driver: Driver | undefined;
}
