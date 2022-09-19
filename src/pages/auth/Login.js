import React, { useEffect } from "react";

import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { Grid, Container } from "@mui/material";

import "./auth.css";
import login_pic_2 from "../../images/img2.png";
import login_pic_1 from "../../images/img1.png";
import logo from "../../images/maintexr.png";
import apple_img from "../../images/applestore.jpg";
import google_img from "../../images/googlestore 2.png";
import mobile_pic from "../../images/carousolimg.png";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import { API_URL, TOKEN_KEY } from "../../constants";
import { keys, startCase } from "lodash";
import { getAuthUser } from "../../utils";

const Login = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = React.useState([]);
  const [showPassword, setShowPassword] = React.useState(false);
  const [user, setUser] = React.useState({
    username: "umerjaved123",
    password: "pakistan777",
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const loginUser = async (e) => {
    setErrors([]);
    e.preventDefault();
    const errs = [];
    keys(user).forEach((key) => {
      if (user[key] === "") {
        errs.push({ msg: `${startCase(key)} is invalid` });
      }
    });
    if (errs.length > 0) {
      setErrors(errs);
      return;
    }
    await axios
      .post(`${API_URL}auth/login`, user)
      .then(({ data }) => {
        localStorage.setItem(TOKEN_KEY, data.token);
        navigate("/");
      })
      .catch((error) => {
        const errs = error.response.data.errors;
        setErrors(errs);
      });
  };
  useEffect(() => {
    if (getAuthUser()) {
      navigate("/");
    }
  }, []);
  return (
    <div className="LoginBody">
      <Container className="mt-5" maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={6}>
            <div className="LoginLeft">
              <div className="caroul">
                <img className="carousol-img" src={mobile_pic}></img>
                <div id="cf3">
                  <img class="bottom" src={login_pic_1} />
                  <img class="top" src={login_pic_2} />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div className="LoginRight">
              <div className="LoginRightBody">
                <a href="/">
                  <h2 className="text-center insta">
                    <img src={logo} />
                  </h2>
                </a>
                <form className="login-form">
                  <input
                    className="form-control LoginInput mx-auto"
                    placeholder="Username"
                    value={user.username}
                    onChange={(e) =>
                      setUser({ ...user, username: e.target.value })
                    }
                  />
                  <div className="Passworddiv">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={user.password}
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                      className="form-control input-field LoginInput mx-auto "
                      placeholder="Password"
                    />
                    <i className="showicon">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? (
                          <VisibilityIcon sx={{ fontSize: 17 }} />
                        ) : (
                          <VisibilityOffIcon sx={{ fontSize: 17 }} />
                        )}
                      </IconButton>
                    </i>
                  </div>

                  <div className="mx-auto d-block text-center">
                    <Button
                      onClick={loginUser}
                      variant="contained"
                      style={{
                        maxWidth: "50%",
                        maxHeight: "30px",
                        minWidth: "80%",
                        minHeight: "30px",
                        fontSize: "11.5px",
                      }}
                    >
                      Log In
                    </Button>
                    {errors.length > 0 && (
                      <div
                        style={{
                          width: "80%",
                          margin: "auto",
                          marginTop: 10,
                        }}
                      >
                        <div className="alert alert-danger">
                          <ul
                            style={{
                              paddingLeft: 12,
                            }}
                          >
                            {errors.map((error, index) => (
                              <li key={index}>{error.msg}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </form>
                <div className="mt-4">
                  <div className="hrdivider">
                    <hr />
                    <span>OR</span>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <span className="fblogo">
                    <FacebookIcon />
                  </span>
                  <p className="fbtext">Log In with Facebook</p>
                </div>
                <a className="forgot" href="/">
                  Forgot Password?
                </a>
              </div>
              <div className="LoginRightBodyBelow">
                <div className="rightSideBelow d-flex justify-content-center mt-2">
                  <p
                    style={{
                      fontSize: "13px",
                    }}
                  >
                    Don't have an account?
                  </p>
                  <Link to="/signup">
                    <a
                      style={{
                        fontSize: "13px",
                        textDecoration: "none",
                        padding: "0px 5px",
                        color: "#2195F6",
                        fontWeight: "bold",
                      }}
                      className="forgot"
                      href="/"
                    >
                      Sign Up
                    </a>
                  </Link>
                </div>
              </div>
              <div className="RightSideEnd">
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "15px",
                  }}
                >
                  Get the app.
                </p>
                <div
                  style={{
                    marginLeft: "24px",
                  }}
                >
                  <img src={apple_img} width="140px" alt="apple" />

                  <img
                    style={{
                      margin: "0px 25px",
                    }}
                    src={google_img}
                    width="140px"
                    alt="apple"
                  />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <div className="Footer">
          <a className="footlinks" href="/">
            Dance
          </a>
          <a className="footlinks" href="/">
            Food and Drinks
          </a>
          <a className="footlinks" href="/">
            Home & Garden
          </a>
          <a className="footlinks" href="/">
            Music
          </a>
          <a className="footlinks" href="/">
            Visual ARTS
          </a>
          <a className="footlinks" href="/">
            API
          </a>
          <a className="footlinks" href="/">
            Privacy
          </a>
          <a className="footlinks" href="/">
            Terms
          </a>
          <a className="footlinks" href="/">
            Top Accounts
          </a>
          <a className="footlinks" href="/">
            HashTags
          </a>
          <a className="footlinks" href="/">
            Location
          </a>
          <a className="footlinks" href="/">
            Instagram Lite
          </a>
          <a className="footlinks" href="/">
            Contact Uploading & Non Users
          </a>
        </div>
        <div className="Footer">
          <a className="footlinks" href="/">
            Meta
          </a>
          <a className="footlinks" href="/">
            About
          </a>
          <a className="footlinks" href="/">
            Blogs
          </a>
          <a className="footlinks" href="/">
            Jobs
          </a>
          <a className="footlinks" href="/">
            Jobs
          </a>
          <a className="footlinks" href="/">
            Jobs
          </a>
        </div>
        <div className="Footer">
          <p className="footlinks">© 2022 Instagram from Umer Javed</p>
        </div>
      </Container>
    </div>
  );
};

export default Login;
