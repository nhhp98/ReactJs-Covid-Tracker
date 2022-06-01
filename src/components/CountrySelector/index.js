import {
  FormControl,
  FormHelperText,
  InputLabel,
  NativeSelect,
} from "@mui/material";
import React from "react";

const CountrySelector = ({ value, handleOnChange, countries }) => {
  return (
    <FormControl>
      <InputLabel htmlFor="" shrink>
        Quốc Gia
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={handleOnChange}
        inputProps={{
          name: "country",
          id: "country-selector",
        }}
      >
        {countries.map((country, index) => (
          <option value={country.ISO2.toLowerCase()} key={index}>
            {country.Country}
          </option>
        ))}
      </NativeSelect>
      <FormHelperText>Lựa chọn quốc gia</FormHelperText>
    </FormControl>
  );
};

export default CountrySelector;
