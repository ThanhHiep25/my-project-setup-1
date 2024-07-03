import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import CardGiftcardTwoToneIcon from "@mui/icons-material/CardGiftcardTwoTone";
import InventoryTwoToneIcon from "@mui/icons-material/InventoryTwoTone";
import { AdvancedImage } from "@cloudinary/react";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { Cloudinary } from "@cloudinary/url-gen/index";
import CartItem from "./indexCartItem.tsx";
import User from "./Css/user.tsx";
function Cart() {
  const [value, setValue] = React.useState("1");
  const cld = new Cloudinary({ cloud: { cloudName: "dokp7ig0u" } });
  const img = cld
    .image("department/u5a8t0ssbu3qqu7bp0yf")
    .format("auto")
    .quality("auto")
    .resize(auto().gravity(autoGravity()).width(80).height(80));
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div
      style={{
        backgroundColor: "rgba(176, 247, 200, 0.247)",
      }}
    >
      <header
        style={{
          height: "100px",
          border: "none",
          display: "flex",
          justifyContent:"space-between",
          marginLeft: "10px",
          cursor: "pointer",
        }}
        className="bar-main"
      >
        <div
          style={{
            display: "flex",
            
          }}
          onClick={() => {
            window.location.href = "/main";
          }}
        >
          <AdvancedImage cldImg={img}/>
          <h1>Gaju</h1>
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
           
            <User />
          </div>
      </header>
      <Box sx={{ width: "100%" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                style={{ fontSize: "16px", fontWeight: "bold" }}
                icon={<ShoppingBagTwoToneIcon />}
                label="Giỏ hàng của bạn"
                value="1"
              />
              <Tab
                style={{ fontSize: "16px", fontWeight: "bold" }}
                icon={<CardGiftcardTwoToneIcon />}
                label="Đơn hàng của bạn"
                value="2"
              />
              <Tab
                style={{ fontSize: "16px", fontWeight: "bold" }}
                icon={<InventoryTwoToneIcon />}
                label="Sản phẩm đã mua"
                value="3"
              />
            </TabList>
          </Box>
          <TabPanel value="1"><CartItem/></TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default Cart;
