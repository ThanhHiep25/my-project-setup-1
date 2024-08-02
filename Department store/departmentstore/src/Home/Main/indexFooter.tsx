import React from "react";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import PetsIcon from "@mui/icons-material/Pets";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

import "./Css/footer.css";
import { IconButton } from "@mui/material";

function IndexFooter() {
  return (
    <div>
      <footer
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p style={{ color: "white" }}>Copyright © Gaju 2024</p>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
        </div>

        <div>
          <IconButton>
            <PetsIcon fontSize="large" color="primary" />
          </IconButton>

          <IconButton>
            <LocalFloristIcon fontSize="large" color="primary" />
          </IconButton>

          <IconButton>
            <PaymentIcon fontSize="large" color="primary" />
          </IconButton>
        </div>
        <p style={{ color: "white" }}>Connect with Us</p>
        {/* Add social media icons */}
        <div>
          <IconButton>
            <FacebookIcon fontSize="large" color="primary" />
          </IconButton>
          <IconButton>
            <XIcon fontSize="large" color="warning" />
          </IconButton>
          <IconButton>
            <InstagramIcon fontSize="large" color="secondary" />
          </IconButton>
        </div>
        <p style={{ color: "white" }}>Help & Support</p>
        {/* Add help & support links */}
        <a href="#">Return Policy</a>
        <a href="#">FAQ</a>
        <a href="#">Contact Us</a>
      </footer>
    </div>
  );
}

export default IndexFooter;
