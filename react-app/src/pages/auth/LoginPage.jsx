import React, { useState } from "react";
import CenterHeader from "../../components/CenterHeader";
import MessageModal from "../../components/MessageModal";
import CenterBox from "./components/CenterBox";
import LoginForm from "./components/LoginForm";
import { login } from "../../services/AuthService";
function RegisterPage() {
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  function handleClose() {
    setOpen(false);
  }
  function handleOpen() {
    setOpen(true);
  }

  const handleLoginRequest = async (loginModel) => {
    const data = await login(loginModel);
    setErrorMessage(data);
    handleOpen();
  };

  return (
    <div>
      <CenterHeader label="Login" />
      <CenterBox>
        <MessageModal
          open={open}
          close={handleClose}
          error_message={errorMessage}
        />
        <LoginForm onSubmit={handleLoginRequest} />
      </CenterBox>
    </div>
  );
}

export default RegisterPage;
