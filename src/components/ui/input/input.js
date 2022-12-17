import TextField from "@mui/material/TextField";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Input = ({ label, errorMessage, value, onChange, isValid, ...props }) => {
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
        <TextField
          color="purple"
          id="outlined-basic"
          variant="outlined"
          margin="normal"
          fullWidth
          {...props}
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
      </ThemeProvider>
    </>
  );
};

export default Input;
