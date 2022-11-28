import React from "react";
import { TempUnitEnum } from "utils/tempUnitConversion";
import { WeatherData } from "types/redux/weatherTypes";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface WeatherBarChatProps {
  items: Array<WeatherData>;
  tempUnit: TempUnitEnum;
  city: string;
}
const WeatherBarChat: React.FC<WeatherBarChatProps> = ({
  items,
  tempUnit,
  city,
}) => {
  const labels = items.map((el) => el.date);
  const wheatherTemp = items.map((el) => el?.main?.temp[tempUnit]);

  const data = {
    labels,
    datasets: [
      {
        label: `Forcast 5 days ${city}`,
        data: wheatherTemp,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={data} />;
};
export default WeatherBarChat;
