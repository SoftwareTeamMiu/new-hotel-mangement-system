import React, { useState } from "react";
import styles from "./css/RegistrationForm.module.css";
import { RegisterModel } from "../../../models/AuthModel";
import MessageModal from "../../../components/MessageModal";
import { useNavigate } from "react-router-dom";
function RegistrationForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const pattern = /^([a-zA-Z0-9-.]+)@([a-zA-Z0-9-]+)(\.[a-zA-Z]{2,5}){1,2}$/;

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
    if (name === "" || email === "" || password === "") {
      setErrorMessage("Please fill all the fields");
      handleOpen();
      return;
    } else {
      if (pattern.test(email) === false) {
        setErrorMessage("Please enter valid email");
        handleOpen();
        return;
      }
      props.onSubmit(new RegisterModel(name, email, password));
    }
  };

  return (
    <div className={styles.container}>
      <form>
        <div className={styles.row}>
          <div className={styles.label1}>Name</div>
          <div className={styles.column}>
            <input
              className={styles.input}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className={styles.row}>
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
              Register
            </button>
            <MessageModal
              open={open}
              close={handleClose}
              error_message={errorMessage}
            />
          </div>
        </div>
      </form>
      <div className={styles.row}>
        <div
          className={styles.column}
          style={{
            fontSize: "15px",
            marginTop: "10px",
          }}
        >
          <button
            className={styles.register_btn}
            style={{
              width: "30%",
              padding: "10px",
            }}
            onClick={() => {
              navigate("/login");
            }}
          >
            Already have account ?
          </button>
        </div>
      </div>
    </div>
  );
}
export default RegistrationForm;
