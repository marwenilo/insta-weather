import React from "react";
import { selectTempUnit } from "store/slices/tempUnitSlice";
import { useAppSelector } from "hooks";
import { selectWeatherForecasts } from "store/slices/weatherSlice";

import Grid from "@mui/material/Grid";
import Carousel from "react-material-ui-carousel";
import WeatherCard from "./WeatherCard";
import { Typography } from "@mui/material";
import WeatherBarChat from "./WeatherBarChart";

const WeatherForecast: React.FC = () => {
  const {
    weatherForecasts,
    cityName: city,
    loading,
  } = useAppSelector(selectWeatherForecasts);

  const { tempUnit } = useAppSelector(selectTempUnit);

  const data: any = [...weatherForecasts];
  if (data) {
    data.unshift(data.pop());
  }

  const sliderItems: number = data.length > 3 ? 3 : data.length;
  const items: Array<any> = [];

  for (let i = 0; i < data.length; i += sliderItems) {
    if (i % sliderItems === 0) {
      items.push(
        <Grid
          key={i.toString()}
          container
          spacing={0}
          sx={{
            justifyContent: "space-evenly",
          }}
        >
          {data.slice(i, i + sliderItems).map((el, index) => {
            return (
              <WeatherCard
                key={index.toString()}
                item={el}
                tempUnit={tempUnit}
              />
            );
          })}
        </Grid>
      );
    }
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Typography variant="h5">{city}</Typography>
      <Carousel
        animation="slide"
        autoPlay={false}
        cycleNavigation
        sx={{
          width: "100%",
        }}
      >
        {items}
      </Carousel>
      <WeatherBarChat
        items={weatherForecasts}
        tempUnit={tempUnit}
        city={city}
      />
    </>
  );
};
export default WeatherForecast;
