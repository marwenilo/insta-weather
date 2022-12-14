import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "store";

import { APIVOne, APIVTwo } from "store/api";
import { CityCoords, WeatherDataState } from "types/redux/weatherTypes";
import {
  FetchCityData,
  FetchWeatherData,
  GetWeatherData,
} from "types/redux/weatherTypes";
import weatherDataHelper from "utils/weatherDataHelper";

export const fetchCityData = createAsyncThunk(
  FetchCityData,
  async (city: string, { dispatch, rejectWithValue }) => {
    try {
      const response = await APIVOne.get(
        `/direct?q=${city},tn&&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );

      await dispatch(
        fetchWeatherData({
          lat: response.data[0].lat,
          lon: response.data[0].lon,
        })
      );
      return response.data[0];
    } catch (err) {
      return rejectWithValue("Please check the name of the city if right");
    }
  }
);

export const fetchWeatherData = createAsyncThunk(
  FetchWeatherData,
  async (cityData: CityCoords, { rejectWithValue }) => {
    try {
      const response = await APIVTwo.get(
        `/forecast?lat=${cityData.lat}&lon=${cityData.lon}&&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);
const initialState: WeatherDataState = {
  cityName: "",
  error: "",
  loading: false,
  weatherForecasts: [
    {
      dt: 0,
      weather: [
        {
          main: "",
          description: "",
        },
      ],
      main: {
        temp: 0,
        feels_like: 0,
        humidity: 0,
      },
      visibility: 0,
      dt_txt: "",
      date: "",
    },
  ],
};

const weatherSlice = createSlice({
  name: GetWeatherData,
  initialState,
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchCityData.pending, (state, action) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchCityData.fulfilled, (state, action) => {
        state.cityName = action.payload.name;
        state.error = "";
      })
      .addCase(fetchCityData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchWeatherData.pending, (state, action) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherForecasts = weatherDataHelper(action.payload);
        state.error = "";
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const selectWeatherForecasts = (state: RootState) => state.weather;

export default weatherSlice.reducer;
