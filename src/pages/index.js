import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/navbar";
import Post from "../components/post";
import { getAuthUser, getAuthToken } from "../utils";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import { API_URL, HEADER_TOKEN_KEY } from "../constants";

const Index = () => {
  const navigate = useNavigate();
  const [posts, setPost] = useState(Array.from(Array(10).keys()));
  const [loading, setLoading] = useState(false);
  const loadPosts = async () => {
    setLoading(true);
    await axios
      .get(API_URL + "posts", {
        headers: {
          [HEADER_TOKEN_KEY]: getAuthToken(),
        },
      })
      .then(({ data }) => {
        setPost(data);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };
  useEffect(() => {
    if (!getAuthUser()) {
      navigate("/login");
    }
    loadPosts();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container index-body">
        <div className="row">
          <div className="col-12 col-md-8">
            {posts.map((post) => (
              <Post post={post} loading={loading} />
            ))}
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
                <div className="text-bold">{getAuthUser()?.username}</div>
                <div className="text-muted">{getAuthUser()?.fullname}</div>
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
