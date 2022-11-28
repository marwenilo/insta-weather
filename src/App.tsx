import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TempUnit from "components/TempUnit/TempUnit";
import Search from "components/Search/Search";
import WeatherForecast from "components/WeatherForecast/WeatherForecast";
import { ToastContainer, toast } from "material-react-toastify";
import { selectWeatherForecasts } from "store/slices/weatherSlice";
import { useAppSelector } from "hooks";
import "material-react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
function App() {
  const { error } = useAppSelector(selectWeatherForecasts);
  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [error]);
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ width: "100%" }}>
          <Stack spacing={2} alignItems="center" marginTop={2}>
            <TempUnit />
            <Search />
            <WeatherForecast />
          </Stack>
        </Box>
      </Container>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
