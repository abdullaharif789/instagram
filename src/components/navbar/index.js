import React, { useState, useRef } from "react";

// Library Imports
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import HomeIcon from "@mui/icons-material/Home";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Logout from "@mui/icons-material/Logout";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import Modal from "@mui/material/Modal";

// Local Imports
import "./navbar.css";
import logo from "../../images/maintexr.png";
import upload from "../../images/uploadimg.png";
import { TOKEN_KEY } from "../../constants";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const inputImage = useRef(null);
  const [openModel, setModel] = React.useState(false);
  const handleOpenModal = () => setModel(true);
  const handleCloseModal = () => setModel(false);
  const [notifymenu, setNotifymenu] = React.useState(null);
  const open_notify = Boolean(notifymenu);
  const handleClickNotify = (event) => {
    setNotifymenu(event.currentTarget);
  };
  const handleCloseNotify = () => {
    setNotifymenu(null);
  };

  const [search, setSearch] = useState({
    text: "",
  });

  const [usermenu, setUsermenu] = React.useState(null);
  const open1 = Boolean(usermenu);
  const handleClickuser = (event) => {
    setUsermenu(event.currentTarget);
  };
  const handleCloseuser = () => {
    setUsermenu(null);
  };

  const removeSearchText = () => {
    setSearch({ text: "" });
  };
  //
  const [post, setPost] = React.useState({
    image: upload,
  });

  // Handler Functions
  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    navigate("/login");
  };
  const pickImage = async (e) => {
    const file = e.target.files[0];
    const base64Image = await convertFileToBase64(file);
    setPost({ ...post, image: base64Image });
  };
  const convertFileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  return (
    <>
      <div className="navbar">
        <div
          className="container p-0 setting"
          style={{
            maxWidth: 935,
          }}
        >
          <div className="nav-left">
            <img src={logo} alt="logo" width="110px" />
          </div>
          <div className="nav-center">
            {search.text.length < 1 && (
              <i>
                <SearchIcon
                  sx={{
                    fontSize: "20px",
                  }}
                />
              </i>
            )}

            <input
              className="form-control"
              placeholder="Search"
              onChange={(e) => setSearch({ text: e.target.value })}
              value={search.text}
            />

            <close>
              {search.text.length > 0 && (
                <CancelIcon
                  onClick={removeSearchText}
                  sx={{
                    fontSize: "16px",
                  }}
                />
              )}
            </close>
          </div>
          <div className="nav-right">
            <i>
              <HomeIcon />
            </i>
            <i>
              <MapsUgcIcon />
            </i>
            <i>
              <AddBoxOutlinedIcon onClick={handleOpenModal} />
            </i>
            <i>
              <ExploreOutlinedIcon />
            </i>
            <i>
              <IconButton
                onClick={handleClickNotify}
                size="small"
                sx={{ padding: "0px" }}
                aria-controls={open_notify ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open_notify ? "true" : undefined}
              >
                <FavoriteBorderOutlinedIcon
                  sx={{ width: 26, height: 26 }}
                  src="/broken-image.jpg"
                />
              </IconButton>
            </i>
            <i>
              <IconButton
                onClick={handleClickuser}
                size="small"
                sx={{ padding: "0px" }}
                aria-controls={open1 ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open1 ? "true" : undefined}
              >
                <Avatar
                  sx={{ width: 26, height: 26 }}
                  src="/broken-image.jpg"
                />
              </IconButton>
            </i>
          </div>
        </div>
        {/* navbar user menu */}
        <Menu
          anchorEl={usermenu}
          id="account-menu"
          open={open1}
          onClose={handleCloseuser}
          onClick={handleCloseuser}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              width: 210,

              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem
            sx={{
              fontSize: "13px",
            }}
          >
            <Avatar
              sx={{ width: "17px", height: "17px", margin: "0px 5px 0px 0px" }}
            />
            Profile
          </MenuItem>
          <MenuItem
            sx={{
              fontSize: "13px",
            }}
          >
            <BookmarkBorderOutlinedIcon
              sx={{ width: "17px", height: "17px", margin: "0px 5px 0px 0px" }}
            />{" "}
            Saved
          </MenuItem>
          <MenuItem
            sx={{
              fontSize: "13px",
            }}
          >
            <SettingsOutlinedIcon
              sx={{ width: "17px", height: "17px", margin: "0px 5px 0px 0px" }}
            />{" "}
            Settings
          </MenuItem>
          <MenuItem
            sx={{
              fontSize: "13px",
            }}
          >
            <SyncOutlinedIcon
              sx={{ width: "17px", height: "17px", margin: "0px 5px 0px 0px" }}
            />{" "}
            Switch accounts
          </MenuItem>
          <Divider />

          <MenuItem
            sx={{
              fontSize: "12px",
            }}
            onClick={logout}
          >
            <ListItemIcon>
              <Logout sx={{ width: 15, height: 15 }} />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
        {/* navbar user menu */}

        {/* notification menu */}
        <Menu
          anchorEl={notifymenu}
          id="account-menu"
          open={open_notify}
          onClose={handleCloseNotify}
          onClick={handleCloseNotify}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              ml: 1,
              width: 430,
              height: 260,

              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem></MenuItem>
        </Menu>
        {/* notification menu */}

        {/* Creating Post Modal */}
        <Modal
          open={openModel}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "40%",
              height: "83%",
              bgcolor: "background.paper",
              borderRadius: 2,
              boxShadow: 24,
              p: 1.5,
              border: "none",
            }}
          >
            <p className="modal-text">Create new post</p>
            <Divider />
            <div className="upload-img">
              <img
                src={post.image}
                alt="upload photos"
                className="img-fluid"
                style={{
                  maxHeight: 500,
                }}
              />
              <h5>Drag photos and videos here</h5>
              <Button
                sx={{
                  marginTop: "10px",
                }}
                variant="contained"
                onClick={() => {
                  inputImage.current.click();
                }}
              >
                Select From Computer
              </Button>
              <input
                ref={inputImage}
                style={{ display: "none" }}
                type="file"
                onChange={pickImage}
              />
            </div>
          </Box>
        </Modal>
        {/* Creating Post Modal */}
      </div>
    </>
  );
};

export default Navbar;
