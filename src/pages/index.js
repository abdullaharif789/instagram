import React from "react";
import Navbar from "../components/navbar";
import Post from "../components/post";

const Index = () => {
  return (
    <div>
      <Navbar />
      <div className="container index-body">
        <div className="row">
          <div className="col-12 col-md-8">
            <Post />
          </div>
          <div className="col-12 col-md-4"></div>
        </div>
      </div>
    </div>
    // <Test />
  );
};

export default Index;
