import {
  kelvinToCelcius,
  kelvinToFahrenheit,
  metreTokilometre,
} from "./tempUnitConversion";

const weatherDataHelper = (res: any) => {
  const daysDate: number[] = [];
  let currentDay = res.list[0].dt_txt;
  for (let i = 0; i < 5; i++) {
    let day = Date.parse(currentDay) + i * 24 * 60 * 60 * 1000;
    daysDate.push(day);
  }
  const forecastDays = res.list.filter((item) =>
    daysDate.includes(Date.parse(item.dt_txt))
  );
  forecastDays.forEach((el) => {
    el.main = {
      ...el.main,
      temp: {
        CELCIUS: kelvinToCelcius(el.main.temp),
        FAHRENHEIT: kelvinToFahrenheit(el.main.temp),
      },
      feels_like: {
        CELCIUS: kelvinToCelcius(el.main.feels_like),
        FAHRENHEIT: kelvinToFahrenheit(el.main.feels_like),
      },
    };
    el.visibility = metreTokilometre(el.visibility);
    el.date = new Date(el.dt * 1000).toDateString();
  });

  return forecastDays;
};
export default weatherDataHelper;
