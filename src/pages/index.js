import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/navbar";
import Post from "../components/post";
import { getAuthUser } from "../utils";
import Avatar from "@mui/material/Avatar";

const Index = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!getAuthUser()) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container index-body">
        <div className="row">
          <div className="col-12 col-md-8">
            <Post />
          </div>
          <div className="col-12 col-md-4">
            <div className="row py-4">
              <div className="col-3 ">
                <Avatar
                  sx={{ width: 56, height: 56 }}
                  src="/broken-image.jpg"
                />
              </div>
              <div className="col-8">
                <div className="text-bold">{getAuthUser().username}</div>
                <div className="text-muted">{getAuthUser().fullname}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <Test />
  );
};

export default Index;
