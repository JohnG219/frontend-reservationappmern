import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Alert } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Swal from "sweetalert2";

const Forgot = () => {
  const { data, loading, error } = useFetch(`https://backend-server-reservation.onrender.com/api/users/`);
  const [credentials, setCredentials] = useState("");
  const [userid, setUserid] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [info, setInfo] = useState({});
  const [countdown, setCountdown] = useState(10);
  const [isCountdownActive, setIsCountdownActive] = useState(false);

  useEffect(() => {
    if (data && credentials !== "") {
      const foundUser = data.find((element) => element.email === credentials);
      if (foundUser) {
        setUserid(foundUser._id);
        setUsername(foundUser.username);
        setInfo({
          severity: "success",
          message: "Email Connected! You can now reset your password.",
        });
        startCountdown();
      } else {
        setInfo({
          severity: "error",
          message:
            "Email not found! Please check your email and reconnect it again...",
        });
      }
    }
  }, [data, credentials]);

  const startCountdown = () => {
    setIsCountdownActive(true);
    let timeLeft = countdown;

    const countdownInterval = setInterval(() => {
      timeLeft--;
      setCountdown(timeLeft);

      if (timeLeft === 0) {
        clearInterval(countdownInterval);
        navigate("/forgotid", { state: { userid, username } });
      }
    }, 100);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    // Logic moved to useEffect
  };

  const handleclick = async (e) => {
    e.preventDefault();
    // Logic moved to useEffect
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <body className="regBody2">
      <div className="login1">
        <NavLink to="/login" className="close-button" onClick={handleCancel}>
          <CloseIcon />
        </NavLink>
        <div className="lContainer">
          <span className="sp">
            Connect Your Email to Reset Password
          </span>
          {info.message && (
            <Alert
              severity={info.severity}
              onClose={() => setInfo({})}
              sx={{
                width: "100%",
                maxWidth: "400px",
                fontSize: "13px",
                position: "fixed",
                left: "36%",
                top: "29%",
              }}
            >
              {info.message}
            </Alert>
          )}

          <input
            type="text"
            className="lInput"
            placeholder="Email"
            id="email"
            onChange={(e) => setCredentials(e.target.value)}
          />

          <button
            disabled={loading}
            onClick={handleClick}
            className="lButton97"
          >
            {" "}
            Connect Email
          </button>
          <button
            disabled={loading}
            onClick={handleclick}
            className="lButton97"
          >
            Reset Password
          </button>
        </div>
      </div>
    </body>
  );
};

export default Forgot;
