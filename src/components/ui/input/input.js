import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const Input = ({
  label,
  errorMessage,
  value,
  onChange,
  isValid,
  id,
  ...InputProps
}) => {
  const [error, setError] = useState(false);
  const handleBlur = () => {
    if (!isValid) setError(true);
    else setError(false);
  };
  
  const isMobileMatch = useMediaQuery("(max-width:600px)");

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
            size="large"
            id={id}
            variant="outlined"
            margin="normal"
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
