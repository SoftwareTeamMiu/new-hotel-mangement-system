import React, { useState } from "react";
import "./css/RegistrationForm.css";
import { LoginModel } from "../../../models/AuthModel";
import MessageModal from "../../../components/MessageModal";
function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  function handleClose() {
    setOpen(false);
  }
  function handleOpen() {
    setOpen(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setErrorMessage("Please fill all the fields");
      handleOpen();
      return;
    } else {
      props.onSubmit(new LoginModel(email, password));
    }
  };

  return (
    <div className="container">
      <form>
        <div
          style={{
            marginTop: "50px",
          }}
          className="row"
        >
          <div className="column label1">Email</div>
          <div className="column">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="column label1">Password</div>
          <div className="column">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <button onClick={handleSubmit}>Register</button>
            <MessageModal
              open={open}
              close={handleClose}
              error_message={errorMessage}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
export default LoginForm;
