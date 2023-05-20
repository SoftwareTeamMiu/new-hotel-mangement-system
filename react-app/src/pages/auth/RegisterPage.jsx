import React from "react";
import CenterHeader from "../../components/CenterHeader";
import CenterBox from "./components/CenterBox";
import RegistrationForm from "./components/RegistraionForm";
function RegisterPage() {
  const handleRegisterRequest = (RegisterModel) => {
    
  };
  return (
    <div>
      <CenterHeader label="Register" />
      <CenterBox>
        <RegistrationForm onSubmit={handleRegisterRequest} />
      </CenterBox>
    </div>
  );
}

export default RegisterPage;
