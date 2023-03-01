import classes from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import CheckboxLabel from "../../components/ui/input/checkbox/checkbox";
import { useState } from "react";
import Input from "../../components/ui/input/input";
import { emailCheck } from "../../utils";
import { login, useApiSdk } from "../../services/api";
import jwt from "jsonwebtoken";
import { toast } from "react-toastify";
import PasswordModal from "../../components/parentModal/passwordModal/passwordModal";
import { AUTH_ACTIONS, useAuthContext } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();
  const sdk = useApiSdk();

  const [username, setUserName] = useState("");
  const [loading, setLoading] = useState();
  const [type, setType] = useState(true);
  const [isChoosen, setIsChoosen] = useState(undefined);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      // const response = await login(payload);
      const response = await sdk.login(payload);

      dispatch({ type: AUTH_ACTIONS.AUTH, payload: response.data });

      const { user_id, username } = jwt.decode(response.data.access);
      localStorage.setItem("username", username);
      setUserName(username);
      console.log(user_id);
      dispatch({ type: AUTH_ACTIONS.USER, payload: user_id });

      if (!jwt.decode(response.data.access).has_changed_password) {
        setIsChoosen(true);
        setLoading(false);
      } else {
        navigate("/dashboard/challenge");
        console.log(response);
        toast.success(`Welcome back ${username}`);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(error.response.data.detail);
    }
  };
  return (
    <>
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
          />
          <Input
            errorMessage="Please enter a valid password"
            label="Password"
            type={type ? "password" : "text"}
            value={payload.password}
            isValid={payload.password.length > 3}
            onChange={handleChange}
            name="password"
          />
          <div className={classes.showPass}>
            <CheckboxLabel
              text="Show Password"
              onChange={() => setType(!type)}
            />
            <Link>Forget Password</Link>
          </div>
          <button onClick={handleSubmit}>
            {loading ? "Loading" : "Log In"}
          </button>
        </div>
      </form>
      {isChoosen && <PasswordModal setIsChoosen={setIsChoosen} username={username} />}
    </>
  );
};

export default Login;
