import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const   Input = ({
  label,
  errorMessage,
  value,
  onChange,
  isValid,
  id,
  endAdornment,
  htmlFor,
  ...InputProps
}) => {
  const [error, setError] = useState(false);
  const handleBlur = () => {
    if (!isValid) setError(true);
    else setError(false);
  };

  const theme = createTheme({
    palette: {
      purple: {
        main: "#123ead",
        contrastText: "#ffff",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <FormControl fullWidth>
          <TextField
            color="purple"
            id={id}
            htmlFor={htmlFor}
            variant="outlined"
            margin="normal"
            endAdornment={endAdornment}
            {...InputProps}
            helperText={error ? `${errorMessage}` : ""}
            error={error}
            onBlur={handleBlur}
            defaultValue={value}
            onChange={(e) => onChange(e)}
            label={
              <span style={{ fontSize: "18px", fontFamily: "Raleway" }}>
                {label}
              </span>
            }
          />
        </FormControl>
      </ThemeProvider>
    </>
  );
};

export default Input;
