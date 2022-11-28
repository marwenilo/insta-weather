export enum TempUnitEnum {
  CELCIUS = "CELCIUS",
  FAHRENHEIT = "FAHRENHEIT",
}

export function kelvinToFahrenheit(k: number) {
  return Math.round((k - 273.15) * 1.8 + 32);
}

export function metreTokilometre(m: number) {
  return Math.round(m / 1000);
}

export function kelvinToCelcius(k: number) {
  return Math.round(k - 273.15);
}
