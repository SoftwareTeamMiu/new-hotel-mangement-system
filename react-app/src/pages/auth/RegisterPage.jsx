import React, { useState } from "react";
import CenterHeader from "../../components/CenterHeader";
import MessageModal from "../../components/MessageModal";
import CenterBox from "./components/CenterBox";
import RegistrationForm from "./components/RegistraionForm";
import { register } from "../../services/AuthService";
function RegisterPage() {
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  function handleClose() {
    setOpen(false);
  }
  function handleOpen() {
    setOpen(true);
  }

  const handleRegisterRequest = async (registerModel) => {
    const data = await register(registerModel);
    setErrorMessage(data);
    handleOpen();
  };
  return (
    <div>
      <CenterHeader label="Register" />
      <CenterBox>
        <MessageModal
          open={open}
          close={handleClose}
          error_message={errorMessage}
        />
        <RegistrationForm onSubmit={handleRegisterRequest} />
      </CenterBox>
    </div>
  );
}

export default RegisterPage;
