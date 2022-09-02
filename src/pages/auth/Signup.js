import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Grid, Container } from "@mui/material";
import IconButton from "@material-ui/core/IconButton";
import Facebook from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";

import logo from "../../images/maintexr.png";
import apple_img from "../../images/applestore.jpg";
import google_img from "../../images/googlestore 2.png";

const SignUpup = () => {
  const [users, setUser] = useState({
    email: "",
    fullname: "",
    username: "",
    password: "",
  });

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });

    setUser({ ...users, password: e.target.value });
  };
  const sign_up = async (e) => {
    e.preventDefault();
    if (
      users.email == "" ||
      users.fullname == "" ||
      users.username == "" ||
      users.password == ""
    ) {
      alert("Please Enter All Fields");
      return;
    }
    await axios.post(`http://localhost:4000/users`, users).then(({ data }) => {
      if (data.success) {
        alert("User created successfully.");
      } else alert("Email already exists.");
      // navigate("/products");
    });
  };
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
                    value={users.email}
                    onChange={(e) =>
                      setUser({ ...users, email: e.target.value })
                    }
                  />
                  <input
                    className="form-control LoginInput mx-auto "
                    placeholder="Full Name"
                    value={users.fullname}
                    onChange={(e) =>
                      setUser({ ...users, fullname: e.target.value })
                    }
                  />
                  <input
                    className="form-control LoginInput mx-auto "
                    placeholder="User Name"
                    value={users.username}
                    onChange={(e) =>
                      setUser({ ...users, username: e.target.value })
                    }
                  />
                  <div className="Passworddiv">
                    <input
                      type={values.showPassword ? "text" : "password"}
                      onChange={handlePasswordChange("password")}
                      value={values.password}
                      className="form-control input-field LoginInput mx-auto "
                      placeholder="Password"
                    />

                    {values.password.length > 0 && (
                      <i className="showicon">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? (
                            <VisibilityIcon sx={{ fontSize: 17 }} />
                          ) : (
                            <VisibilityOffIcon sx={{ fontSize: 17 }} />
                          )}
                        </IconButton>
                      </i>
                    )}
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
                      onClick={sign_up}
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
                  <Link to="/Login">
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

export default SignUpup;
