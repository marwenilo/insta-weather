import { render, fireEvent, screen } from "@testing-library/react";
import TempUnit from "./TempUnit";
import { TempUnitEnum } from "utils/tempUnitConversion";
import { Provider } from "react-redux";
import { store } from "store";

test("Change Temp Unit", () => {
  render(
    <Provider store={store}>
      <TempUnit />
    </Provider>
  );

  const celciusButton = screen.getByRole("button", { name: /celcius/i });
  const fahrenheitButton = screen.getByRole("button", {
    name: /fahrenheit/i,
  });

  const tempUnitText = screen.getByTestId("selected_temp");

  fireEvent.click(fahrenheitButton);
  expect(tempUnitText.textContent).toEqual(TempUnitEnum.FAHRENHEIT);

  fireEvent.click(celciusButton);
  expect(tempUnitText.textContent).toEqual(TempUnitEnum.CELCIUS);
});
