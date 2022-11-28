import { TempUnitEnum } from "utils/tempUnitConversion";

export interface TempUnitState {
  tempUnit: TempUnitEnum;
}

export interface CityCoords {
  lat: number;
  lon: number;
}
export type WeatherData = {
  dt: number;
  weather: [
    {
      main: string;
      description: string;
    }
  ];
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  visibility: number;
  dt_txt: string;
  date: string;
};
export interface WeatherDataState {
  cityName: string;
  error: any;
  loading: boolean;
  weatherForecasts: Array<WeatherData>;
}
const FetchCityData: string = "FetchCityData";
const FetchWeatherData: string = "FetchWeatherData";
const GetWeatherData: string = "Weather";
const UpdateTempUnitAction: string = "TempUnit";
export {
  FetchCityData,
  FetchWeatherData,
  GetWeatherData,
  UpdateTempUnitAction,
};
