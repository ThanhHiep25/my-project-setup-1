import React from "react";
import "./Css/drawer.css";
import { Button, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Drawer() {
  return (
    <div className="drawer-container">
      <h1>Gaju</h1>
      <div>
        <div className="search-group">
          <input
            type="search"
            className="input-search-store"
            placeholder="Search store..."
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </div>
        <div  style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "20px"
        }}>
          <Button>Trang chu</Button>
          <Button>Danh muc san pham</Button>
          <Button>Danh sach cua hang</Button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
