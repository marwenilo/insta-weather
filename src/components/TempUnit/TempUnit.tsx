import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "hooks";
import { selectTempUnit, changeTempUnit } from "store/slices/tempUnitSlice";
import { TempUnitEnum } from "utils/tempUnitConversion";

import Tooltip from "@mui/material/Tooltip";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import { red, blue } from "@mui/material/colors";

const TempUnit: React.FC = () => {
  const tempUnit = useAppSelector(selectTempUnit);
  const [alignment, setAlignment] = useState(tempUnit.tempUnit);

  const dispatch = useAppDispatch();

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: TempUnitEnum
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      dispatch(changeTempUnit(newAlignment));
    }
  };

  return (
    <>
      <Typography variant="h5">Selected Temperature Unit :</Typography>
      <Typography
        variant="h6"
        gutterBottom
        data-testid="selected_temp"
        sx={{
          color: alignment === TempUnitEnum.CELCIUS ? red[700] : blue[700],
        }}
      >
        {alignment}
      </Typography>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <Tooltip title="CELCIUS">
          <ToggleButton
            selected={alignment === TempUnitEnum.CELCIUS}
            value={TempUnitEnum.CELCIUS}
          >
            °C
          </ToggleButton>
        </Tooltip>
        <Tooltip title="FAHRENHEIT">
          <ToggleButton
            selected={alignment === TempUnitEnum.FAHRENHEIT}
            value={TempUnitEnum.FAHRENHEIT}
          >
            °F
          </ToggleButton>
        </Tooltip>
      </ToggleButtonGroup>
    </>
  );
};
export default TempUnit;
