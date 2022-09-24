import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Grid, Container } from "@mui/material";
import IconButton from "@material-ui/core/IconButton";
import Facebook from "@mui/icons-material/Facebook";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { keys, startCase } from "lodash";
import axios from "axios";
import { API_URL } from "../../constants";

import logo from "../../images/maintexr.png";
import apple_img from "../../images/applestore.jpg";
import google_img from "../../images/googlestore 2.png";
import { getAuthUser } from "../../utils";

const SignUpup = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = React.useState([]);
  const [showPassword, setShowPassword] = React.useState(false);
  const [user, setUser] = useState({
    email: "",
    fullname: "",
    username: "",
    password: "",
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const signUp = async (e) => {
    e.preventDefault();
    const errs = [];
    keys(user).forEach((key) => {
      if (user[key] === "") {
        errs.push({ msg: `${startCase(key)} is required.` });
      }
    });
    if (errs.length > 0) {
      setErrors(errs);
      return;
    }
    // TODO: Validate Email By Umer
    // Make API Call
    await axios
      .post(`${API_URL}auth/signup`, user)
      .then(({ data }) => {
        navigate("/login");
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
    <div className="SignUpUpBody">
      <Container className="mt-5" maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={12}>
            <div className="SignUpRight">
              <div className="SignUpRightBody">
                <a href="/">
                  <h2 className="text-center insta">
                    <img src={logo} />
                  </h2>
                </a>
                <h5 className="text-center pl-3 SignUpperText">
                  SignUp up to see photos and videos from your friends.
                </h5>
                <div className="mx-auto d-block text-center mt-3">
                  <Button
                    className="mx-auto "
                    variant="contained"
                    style={{
                      maxWidth: "50%",
                      maxHeight: "50px",
                      minWidth: "80%",
                      minHeight: "30px",
                      fontSize: "11.5px",
                    }}
                    startIcon={<Facebook />}
                  >
                    Log In with Facebook
                  </Button>
                </div>
                <div className="mt-4">
                  <div className="hrdivider">
                    <hr />
                    <span>OR</span>
                  </div>
                </div>
                <form className="LoginForm">
                  <input
                    type="email"
                    className="form-control LoginInput mx-auto"
                    placeholder="Email"
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                  <input
                    className="form-control LoginInput mx-auto "
                    placeholder="Full Name"
                    value={user.fullname}
                    onChange={(e) =>
                      setUser({ ...user, fullname: e.target.value })
                    }
                  />
                  <input
                    className="form-control LoginInput mx-auto "
                    placeholder="User Name"
                    value={user.username}
                    onChange={(e) =>
                      setUser({ ...user, username: e.target.value })
                    }
                  />
                  <div className="Passworddiv">
                    <input
                      type={showPassword ? "text" : "password"}
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                      value={user.password}
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
                  <p className="text-center pl-3 SignUpBelowp">
                    People who use our service may have uploaded your contact
                    information to Instagram. <b>Learn More</b>
                  </p>
                  <p className="text-center pl-3 SignUpBelowp">
                    By SignUping up, you agree to our <b>Terms</b> ,{" "}
                    <b>Privacy</b>
                    <b>Policy</b> and <b>Cookies Policy.</b>
                  </p>
                  <div className="mx-auto d-block text-center">
                    <Button
                      onClick={signUp}
                      variant="contained"
                      style={{
                        maxWidth: "50%",
                        maxHeight: "30px",
                        minWidth: "80%",
                        minHeight: "30px",
                        fontSize: "11.5px",
                      }}
                    >
                      Sign Up
                    </Button>
                  </div>
                </form>
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
              <div className="SignUpRightBodyBelow">
                <div className="rightSideBelow d-flex justify-content-center mt-2">
                  <p
                    style={{
                      fontSize: "13px",
                    }}
                  >
                    Have an account?
                  </p>
                  <Link to="/login">
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
                      Log In
                    </a>
                  </Link>
                </div>
              </div>
              <div className="SignUpRightSideEnd">
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
            Contact Uploading & Non user
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

export default SignUpup;
