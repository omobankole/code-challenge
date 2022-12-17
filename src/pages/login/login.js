import classes from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import CheckboxLabel from "../../components/checkbox/checkbox";
import { useState } from "react";

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
      <div>
        <h3>Log In</h3>
        <p>Welcome back! Please enter your details.</p>
      </div>
      <div className={classes.inputs}>
        <input
          value={payload.email}
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          value={payload.password}
          name="password"
          type={type ? "password" : "text"}
          placeholder="Password"
          onChange={handleChange}
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
