import "./Css/main.css";

import React, { useState } from "react";

import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";
import { Badge } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";

import ItemCenter from "../../ItemMain/ItemCenter/indexItem.tsx";
import User from "./Css/user.tsx";
import { useNavigate } from "react-router-dom";

const Main: React.FC = () => {
  const navigate = useNavigate();
  const cld = new Cloudinary({ cloud: { cloudName: "dokp7ig0u" } });
  const img = cld
    .image("department/u5a8t0ssbu3qqu7bp0yf")
    .format("auto")
    .quality("auto")
    .resize(auto().gravity(autoGravity()).width(80).height(80));

  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <div className="containerMain">
        <header
          style={{
            width: "90%",
            height: "100px",
            borderBottomRightRadius: "20px",
            borderBottomLeftRadius: "20px",
            border: "none",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            boxShadow: "0px 0px 10px 0px black",
            position: "fixed",
            top: "0px",
            zIndex: "1000",
            backgroundColor: "white",
          }}
          className="bar-main"
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <AdvancedImage cldImg={img} />
            <h1>Gaju</h1>
          </div>
          <div>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Store"
                inputProps={{ "aria-label": "search" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: "200px",
            }}
          >
            <StorefrontTwoToneIcon
              style={{ fontSize: "40px" }}
              className="cur"
            />
            <Badge badgeContent={count} color="warning">
              <ShoppingBagTwoToneIcon
                onClick={() => {
                  navigate("/cart");
                }}
                style={{ fontSize: "40px" }}
                className="cur"
              />
            </Badge>
            <User />
          </div>
        </header>
      </div>

      <div style={{}} className="main-center">
        <ItemCenter onCountChange={setCount} />
      </div>
    </div>
  );
};

export default Main;
