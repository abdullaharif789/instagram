import React, { useState } from "react";

// Library Imports
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import StarBorderIcon from "@mui/icons-material/StarBorder";
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
import logo from "../images/maintexr.png";
import upload from "../images/uploadimg.png";

const Navbar = () => {
  const style = {
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
  };
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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="navbar">
        <div
          className="container p-0"
          style={{
            maxWidth: 935,
          }}
        >
          <div className="nav-left">
            <img src={logo} alt="logo" width="110px" />
            <Button
              sx={{
                minWidth: "10px",
                padding: "0px 0px",
              }}
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <KeyboardArrowDownIcon />
            </Button>
            <Menu
              sx={{
                padding: "0px 0px",
                height: "150px",
                marginLeft: "-90px",
                marginTop: "10px",
              }}
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem
                sx={{
                  fontSize: "13px",
                  fontWeight: "400",
                  padding: "3px 20px",
                }}
                onClick={handleClose}
              >
                <i className="nav-left-menu">
                  <GroupAddIcon
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                    }}
                  />
                </i>
                Following
              </MenuItem>
              <MenuItem
                sx={{
                  fontSize: "13px",
                  fontWeight: "400",
                  padding: "3px 20px",
                }}
                onClick={handleClose}
              >
                <i className="nav-left-menu">
                  <StarBorderIcon
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                    }}
                  />
                </i>
                Favorites
              </MenuItem>
            </Menu>
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
          <Box sx={style}>
            <p className="modal-text">Create new post</p>

            <Divider />
            <div className="upload-img">
              <img src={upload} alt="upload photos" width="100px" />
              <h5>Drag photos and videos here</h5>
              <Button
                sx={{
                  marginTop: "10px",
                }}
                variant="contained"
              >
                Select From Computer
              </Button>
            </div>
          </Box>
        </Modal>
        {/* Creating Post Modal */}
      </div>
    </>
  );
};

export default Navbar;
