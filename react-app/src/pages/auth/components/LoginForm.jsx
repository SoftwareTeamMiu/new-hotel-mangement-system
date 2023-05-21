import React, { useState } from "react";
import styles from "./css/RegistrationForm.module.css";
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
    <div className={styles.container}>
      <form>
        <div
          style={{
            marginTop: "50px",
          }}
          className={styles.row}
        >
          <div className={styles.label1}>Email</div>
          <div className={styles.column}>
            <input
              className={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.label1}>Password</div>
          <div className={styles.column}>
            <input
              className={styles.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <button className={styles.submit_btn} onClick={handleSubmit}>
              Login
            </button>
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
