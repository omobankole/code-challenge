import classes from "./passwordModal.module.css";
import ParentModal from "../parentModal";
import Input from "../../ui/input/input";
import { useNavigate } from "react-router";
import { useState } from "react";
import { password } from "../../../services/api";
import CheckboxLabel from "../../ui/input/checkbox/checkbox";
import { toast } from "react-toastify";

const PasswordModal = ({ setModal, username }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState();
  const [type, setType] = useState(true);
  const [payload, setPayload] = useState({
    password: "",
    comfirmPassword: "",
  });

  const handleChange = (e) => {
    setPayload((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(payload);
    const data = {
      password: payload.password,
    };
    console.log(data);
    try {
      setLoading(true);
      const response = await password(data);
      navigate("/dashboard/challenge");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(error.response.data.password[0]);
    }
  };
  return (
    <ParentModal setModal={setModal}>
      <form className={classes.main}>
        <div className={classes.content}>
          <h3>Welcome, {username}</h3>
          <p>Please enter your new password</p>
        </div>
        <div className={classes.input}>
          <Input
            errorMessage="Please enter a valid password"
            label="Password"
            type={type ? "password" : "text"}
            value={payload.password}
            isValid={payload.password.length > 4}
            onChange={handleChange}
            name="password"
            size="large"
          />
          <Input
            errorMessage="Please enter a valid password"
            label="Password"
            type={type ? "password" : "text"}
            value={payload.comfirmPassword}
            // isValid={payload.password === payload.comfirmPassword}
            onChange={handleChange}
            name="password"
            size="large"
          />
          <CheckboxLabel text="Show Password" onChange={() => setType(!type)} />
          <button onClick={handleSubmit}>
            {loading ? "Loading" : "Continue"}
          </button>
        </div>
      </form>
    </ParentModal>
  );
};

export default PasswordModal;
