import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import moment from "moment";

import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Skeleton from "@mui/material/Skeleton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NearMeIcon from "@mui/icons-material/NearMe";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import InputEmoji from "react-input-emoji";

import "./post.css";

export default function Post(props) {
  const [allComments, setAllComments] = useState([]);
  const [text, setText] = useState();
  const [disable, setdisable] = useState(false);

  const add_comment = () => {
    setAllComments([{ text, username: "abdullaharif.pk" }, ...allComments]);
    setText("");
  };

  function handleOnEnter(text) {
    console.log("enter", text);
  }

  const { loading = false, post } = props;

  return (
    <Card sx={{ borderRadius: 2, marginBottom: 3 }}>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          ) : (
            <Avatar
              alt="Ted talk"
              src={`https://randomuser.me/api/portraits/men/${
                Math.floor(Math.random() * 100) + 1
              }.jpg`}
            />
          )
        }
        action={
          loading ? null : (
            <IconButton aria-label="settings">
              <MoreVertIcon
                sx={{
                  transform: "rotate(90deg)",
                }}
              />
            </IconButton>
          )
        }
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            post?.user?.fullname
          )
        }
        subheader={
          loading ? <Skeleton animation="wave" height={10} width="40%" /> : ""
        }
      />
      {loading ? (
        <Skeleton sx={{ height: 500 }} animation="wave" variant="rectangular" />
      ) : (
        <CardMedia component="img" height="500" image={post.image} />
      )}
      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <>
            <div className="post_buttons row">
              <div>
                <i>
                  <FavoriteBorderOutlinedIcon />
                </i>
                <i>
                  <ChatBubbleOutlineOutlinedIcon />
                </i>
                <i>
                  <NearMeIcon />
                </i>
              </div>
              <div>
                <i>
                  <BookmarkBorderIcon />
                </i>
              </div>
            </div>
            <div className="likes">
              <p>550 likes</p>
            </div>
            <div className="containerr">
              <div className="text">
                <a href="/">{post?.user?.username} </a>
                {post?.description}
              </div>
            </div>
            <div className="show_allcoments">
              {allComments.map((comment) => (
                <div className="comment_styling">
                  <p>
                    <strong>{comment.username}</strong> {comment.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="post_time">{moment(post.date).fromNow()}</div>
            <div className="comment_post">
              <InputEmoji
                value={text}
                onChange={setText}
                cleanOnEnter
                borderRadius={0}
                onEnter={handleOnEnter}
              />
              <button
                disabled={disable}
                onClick={add_comment}
                className="comment_submit"
              >
                Post
              </button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
