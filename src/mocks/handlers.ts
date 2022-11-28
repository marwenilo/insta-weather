import { rest } from "msw";
import { APIVOne, APIVTwo } from "store/api";

function getCoords() {
  return rest.get(
    `${APIVOne}/direct?q=tunis,tn&&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([{ lat: 36.8002068, lon: 10.1857757, name: "Tunis" }])
      );
    }
  );
}
function getWeatherDetails() {
  return rest.get(
    `${APIVTwo}/forecast?lat=36.8002068&lon=10.1857757&&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            dt: 1254,
            weather: [
              {
                main: "this string for test",
                description: "this string for test",
              },
            ],
            main: {
              temp: 1254,
              feels_like: 1254,
              humidity: 1254,
            },
            visibility: 1254,
            dt_txt: "this string for test",
            date: "this string for test",
          },
          {
            dt: 1254,
            weather: [
              {
                main: "this string for test",
                description: "this string for test",
              },
            ],
            main: {
              temp: 1254,
              feels_like: 1254,
              humidity: 1254,
            },
            visibility: 1254,
            dt_txt: "this string for test",
            date: "this string for test",
          },
          {
            dt: 1254,
            weather: [
              {
                main: "this string for test",
                description: "this string for test",
              },
            ],
            main: {
              temp: 1254,
              feels_like: 1254,
              humidity: 1254,
            },
            visibility: 1254,
            dt_txt: "this string for test",
            date: "this string for test",
          },
        ])
      );
    }
  );
}

export const handlers = [getCoords(), getWeatherDetails()];
