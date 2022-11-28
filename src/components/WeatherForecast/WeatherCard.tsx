import React from "react";
import { TempUnitEnum } from "utils/tempUnitConversion";
import { WeatherData } from "types/redux/weatherTypes";

import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

interface WeatherCardProps {
  item: WeatherData;
  tempUnit: TempUnitEnum;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ item, tempUnit }) => {
  const {
    visibility,
    main: { temp, feels_like, humidity },
    weather,
    date,
  } = item;

  const selectedTempUnit = {
    CELCIUS: "°C",
    FAHRENHEIT: "°F",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingY: 3,
      }}
    >
      <Typography sx={{ fontSize: 10 }} gutterBottom>
        {date}
      </Typography>
      <Sheet
        variant="outlined"
        sx={{
          display: "flex",
          gap: 2,
          p: 2,
          minWidth: 350,
          borderRadius: "sm",
        }}
      >
        <AspectRatio
          sx={{
            flexBasis: "200px",
            borderRadius: "sm",
            overflow: "auto",
          }}
        >
          <img
            src="https://68.media.tumblr.com/4473826397d286134aadd294bd816af7/tumblr_ooxcw0Sfpj1vbdodoo1_1280.gif"
            alt=""
          />
        </AspectRatio>
        <Box>
          <Typography sx={{ fontSize: 15 }}>
            {temp[tempUnit]} {selectedTempUnit[tempUnit]}
          </Typography>
          <Typography sx={{ fontSize: 10 }} gutterBottom>
            Feels like: {feels_like[tempUnit]} {selectedTempUnit[tempUnit]}
          </Typography>
          <Typography sx={{ fontSize: 10 }}>
            Weather:{weather[0]?.main}
          </Typography>
          <Typography sx={{ fontSize: 10 }}>Humidity:{humidity}%</Typography>
          <Typography sx={{ fontSize: 10 }} gutterBottom>
            Visibility: {visibility} km
          </Typography>
        </Box>
      </Sheet>
    </Box>
  );
};
export default WeatherCard;
