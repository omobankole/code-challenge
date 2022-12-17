import classes from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import CheckboxLabel from "../../components/ui/input/checkbox/checkbox";
import { useState } from "react";
import Input from "../../components/ui/input/input";
import { emailCheck } from "../../utils";

const Login = () => {
  const navigate = useNavigate();
  const [type, setType] = useState(true);
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setPayload((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(payload);
    navigate("/dashboard");
  };
  return (
    <form className={classes.main}>
      <div className={classes.loginContent}>
        <h3>Log In</h3>
        <p>Welcome back! Please enter your details.</p>
      </div>
      <div className={classes.inputs}>
        <Input
          errorMessage="Please enter a valid email"
          value={payload.email}
          isValid={emailCheck(payload.email)}
          onChange={handleChange}
          label="Email"
          type="email"
          name="email"
          size="large"
        />
        <Input
          errorMessage="Please enter a valid password"
          label="Password"
          type={type ? "password" : "text"}
          value={payload.password}
          isValid={payload.password.length > 8}
          onChange={handleChange}
          name="password"
          size="large"
        />
        <div className={classes.showPass}>
          <CheckboxLabel text="Show Password" onChange={() => setType(!type)} />
          <Link>Forget Password</Link>
        </div>
        <button onClick={handleSubmit}>Log In</button>
      </div>
    </form>
  );
};

export default Login;
