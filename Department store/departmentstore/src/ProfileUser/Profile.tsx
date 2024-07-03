import "./Css/profile.css";

import React from "react";

import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import MaleIcon from "@mui/icons-material/Male";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { Avatar, Divider } from "@mui/material";
import Box from "@mui/material/Box";
import { deepPurple } from "@mui/material/colors";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import EditIcon from "@mui/icons-material/Edit";
import Inventory2TwoToneIcon from "@mui/icons-material/Inventory2TwoTone";
import AccessTimeTwoToneIcon from "@mui/icons-material/AccessTimeTwoTone";

function Profile() {
  const actions = [
    { icon: <FileCopyIcon />, name: "Copy ID" },
    { icon: <EditIcon />, name: "Edit" },
    { icon: <PrintIcon />, name: "Print" },
    { icon: <ShareIcon />, name: "Share" },
  ];
  return (
    <div>
      <div
        style={{
          padding: "30px",
          height: "400px",
          backgroundColor: "#D8EFD3",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        <h1>Thông tin cá nhân</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ bgcolor: deepPurple[500], height: 100, width: 100 }}>
            OP
          </Avatar>
          <div style={{ marginLeft: 50 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <p className="p-name">OPain </p>
              <MaleIcon color="info" fontSize="large" />
            </div>
            <p>ID : 565656</p>
          </div>
          <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
            <SpeedDial
              ariaLabel="SpeedDial basic example"
              sx={{ position: "absolute", right: 16 }}
              icon={<SpeedDialIcon />}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                />
              ))}
            </SpeedDial>
          </Box>
        </div>
      </div>
      <div
        style={{
          margin: 30,
        }}
      >
        <div>
          <div className="center-div">
            <Inventory2TwoToneIcon />
            <h3 className="left"> Sản phẩm yêu thích:</h3>
          </div>
          <Divider />
        </div>
        <div>
          <div className="center-div">
            <AccessTimeTwoToneIcon />
            <h3 className="left">Lịch sử mua hàng:</h3>
          </div>
          <Divider />
        </div>
        <div>
          <div className="center-div">
            <h3 className="left">Thành tựu:</h3>
          </div>
          <Divider />
        </div>
      </div>
    </div>
  );
}

export default Profile;
