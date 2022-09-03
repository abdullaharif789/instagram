import React from "react";
import Navbar from "../components/Navbar";
import Post from "../components/Post";

const Index = () => {
  return (
    <div>
      <Navbar />
      <div className="container index-body">
        <div className="row">
          <div className="col-12 col-md-8">
            {Array.from(Array(20).keys()).map((i) => (
              <Post />
            ))}
          </div>
          <div className="col-12 col-md-4"></div>
        </div>
      </div>
    </div>
    // <Test />
  );
};

export default Index;
