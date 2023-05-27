import React, { useState, useEffect } from "react";
import CenterHeader from "../../components/CenterHeader";
import MessageModal from "../../components/MessageModal";
import CenterBox from "./components/CenterBox";
import LoginForm from "./components/LoginForm";
import { login } from "../../services/AuthService";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  function handleClose() {
    setOpen(false);
  }
  function handleOpen() {
    setOpen(true);
  }

  function checkAuthority(user) {
    if (user.role.roleTitle === "Manager") {
      navigate("/admin/roomstatus");
    } else if (user.role.roleTitle === "User") {
      navigate("/");
    } else if (user.role.roleTitle === "Receptionist") {
      navigate("/ReceptionistPage");
    }
  }

  const handleLoginRequest = async (loginModel) => {
    await login(loginModel).then((response) => {
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        if (response.data.user.role.roleTitle === "Manager") {
          navigate("/admin/roomstatus");
        } else if (response.data.user.role.roleTitle === "User") {
          navigate("/");
        } else if (response.data.user.role.roleTitle === "Receptionist") {
          navigate("/ReceptionistPage");
        }
      } else {
        setErrorMessage(response);
        handleOpen();
      }
    });
  };
  var user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    document.title = "Login Page";
    const checkAuth = async () => {
      const token = await localStorage.getItem("token");
      if (!token) {
        navigate("/login");
      } else {
        checkAuthority(user);
      }
    };
    checkAuth();
  }, []);

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

export default LoginPage;
