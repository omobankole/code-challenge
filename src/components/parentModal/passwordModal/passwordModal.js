import classes from "./passwordModal.module.css";
import ParentModal from "../parentModal";
import Input from "../../ui/input/input";
import { useNavigate } from "react-router";
import { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const PasswordModal = ({ setModal }) => {
  const navigate = useNavigate();
  const [type, setType] = useState(true);
  const [payload, setPayload] = useState({
    email: "",
    password: "",
    comfirmPassword: ""
  });

  const handleClickShowPassword = () => {
    setPayload({
      ...payload,
      setType: !payload.setType,
    });
  };
  const handleChange = (e) => {
    setPayload((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(payload);
    navigate("/dashboard/challenge");
  };
  return (
    <ParentModal setModal={setModal}>
      <form className={classes.main}>
        <div className={classes.content}>
          <h3>Welcome, Folashaye</h3>
          <p>Please enter your new password</p>
        </div>
        <div className={classes.input}>
          <Input
            htmlFor="outlined-adornment-password"
            id="outlined-adornment-password"
            errorMessage="Please enter a valid password"
            label="Password"
            type={type ? "password" : "text"}
            value={payload.password}
            isValid={payload.password.length > 8}
            onChange={handleChange}
            name="password"
            size="large"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {payload.setType ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <Input
            htmlFor="outlined-adornment-password"
            id="outlined-adornment-password"
            errorMessage="Please enter a valid password"
            label="Password"
            type={type ? "password" : "text"}
            value={payload.password}
            isValid={payload.password.length > 8}
            onChange={handleChange}
            name="password"
            size="large"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {payload.setType ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        <button onClick={handleSubmit}>Continue</button>
        </div>
      </form>
    </ParentModal>
  );
};

export default PasswordModal;
