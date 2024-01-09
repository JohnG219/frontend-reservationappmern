import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import { Alert } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { CircularProgress } from "@material-ui/core";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    error: {
      email: false,
      password: false,
    },
    showPassword: false,
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleTogglePasswordVisibility = () => {
    setCredentials((prev) => ({
      ...prev,
      showPassword: prev.password.length > 0 ? !prev.showPassword : false,
    }));
  };  

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [id]: value,
      error: {
        ...prev.error,
        [id]: value.trim() === "",
      },
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (!credentials.email || !credentials.password) {
      setCredentials((prev) => ({
        ...prev,
        error: {
          email: !credentials.email,
          password: !credentials.password,
        },
      }));
      return;
    }

    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("https://backend-server-reservation.onrender.com/api/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  const handleRegisterNowClick = () => {
    dispatch({ type: "RESET_ERROR" });
  };
  const handleForgotPasswordClick = () => {
    dispatch({ type: "RESET_ERROR" });
  };

  return (
    <body className="logBody">
      <div className="login">
        <div className="lContainer">
          <input
            type="text"
            placeholder={credentials.error.email ? "Email is required" : "Email"}
            id="email"
            onChange={handleChange}
            className={`lInput ${credentials.error.email ? "error" : ""}`}
          />
          <input
            type={credentials.showPassword ? "text" : "password"}
            placeholder={credentials.error.email ? "Password is required" : "Password"}
            id="password"
            value={credentials.password}
            onChange={handleChange}
            className={`lInput ${credentials.error.password ? "error" : ""}`}
          />
          <div className="password-icon" onClick={handleTogglePasswordVisibility}>
            {credentials.showPassword && credentials.password.length > 0 ? (
              <VisibilityOff />
            ) : (
              credentials.password.length > 0 && <Visibility />
            )}
          </div>
          <button disabled={loading} onClick={handleClick} className="lButton">
          {loading ? <CircularProgress size={19} color="white" /> : "Login"}
          </button>
        </div>
        {error && <span class="colorspan">{error.message}</span>}
        <br></br>
        <br></br>
        <span className="shr123">
          <NavLink
            to="/register"
            style={{ color: "inherit", textDecoration: "none" }}
            onClick={handleRegisterNowClick}
          >
            <span className="sh1">don't have account? Register now</span>
          </NavLink>
          <br />
          <br />
          <NavLink
            to="/forgot"
            style={{ color: "inherit", textDecoration: "none" }}
            onClick={handleForgotPasswordClick}
          >
            <span className="sh2">Forgot password</span>
          </NavLink>
        </span>
      </div>
    </body>
  );
};

export default Login;
