import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import WeatherForecast from "./WeatherForecast";
import server from "mocks/server";

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
const city = "Tunis";


  test("Renders the component without posts", async () => {
    render(<WeatherForecast />);
     // eslint-disable-next-line testing-library/prefer-query-by-disappearance
     await waitForElementToBeRemoved(() => screen.getByLabelText(/Loading.../i));

     expect(screen.getByText(city)).toBeInTheDocument();
  });
