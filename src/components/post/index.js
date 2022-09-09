import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";

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
  const post_active = () => {
    if (text.length < 1) {
      setdisable(false);
    } else {
      setdisable(true);
    }
  };

  console.log(disable);
  const add_comment = () => {
    setAllComments([{ text }, ...allComments]);
    setText("");
  };

  function handleOnEnter(text) {
    console.log("enter", text);
  }

  const { loading = false } = props;

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
              src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
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
            "Ted"
          )
        }
        subheader={
          loading ? <Skeleton animation="wave" height={10} width="40%" /> : ""
        }
      />
      {loading ? (
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      ) : (
        <CardMedia
          component="img"
          height="460"
          image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
          alt="Nicola Sturgeon on a TED talk stage"
        />
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
              <input id="ch" type="checkbox" />
              <label for="ch"></label>
              <div className="text">
                <a href="/">j.junaidjamshed </a>Decorative and basics, all are
                on sale! Grab your favorites at flat 25% 35% off from our
                Defence Day Sale. Was: 5,290 Now: 3,967.50 Available in stores
                online. https://bit.ly/3BbgHBv #JDot #DefenceDaySale
              </div>
            </div>
            <div className="show_allcoments">
              {allComments.map((comment) => (
                <div className="comment_styling">
                  <p>{comment.text}</p>
                </div>
              ))}
            </div>
            <div className="post_time">23 HOURS AGO</div>
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