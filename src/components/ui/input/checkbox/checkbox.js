import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    purple: {
      main: "#124EAF",
      contrastText: "#ffff",
    },
  },
});

const CheckboxLabel = ({ onChange, text }) => {
  return (
    <FormGroup>
      <ThemeProvider theme={theme}>
        <FormControlLabel
          control={<Checkbox onChange={onChange} color="purple" />}
          label={
            <span
              style={{
                fontSize: "16px",
                fontFamily: "Raleway",
              }}
            >
              {text}
            </span>
          }
        />
      </ThemeProvider>
    </FormGroup>
  );
};

export default CheckboxLabel;
