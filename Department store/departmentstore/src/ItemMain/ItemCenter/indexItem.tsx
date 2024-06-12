import "./Css/item.css";

import React from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import { Button, IconButton, Rating } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface ItemCenterProps {
  onCountChange: (newCount: number) => void;
}

const ItemCenter: React.FC<ItemCenterProps> = ({ onCountChange }) => {
  const [value, setValue] = React.useState<number | null>(2);
  const [count, setCount] = React.useState<number>(0);

  const handleAddToCart = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange(newCount);
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 5,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gridGap: "10px",
        paddingLeft: "350px",
        paddingRight: "280px",
        paddingBottom: "200px",
        paddingTop: "200px",
      }}
    >
      <Card sx={{ width: 300, borderRadius: 5 }} className="card-item">
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Giày Nike Journal"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="300"
          image="https://res.cloudinary.com/dokp7ig0u/image/upload/v1717591652/department/nikeBlackWhite.png"
          alt="Nike"
        />
        <CardContent>
          <Typography variant="body2" fontSize="20px" color="text.secondary">
            Giá: 300 $
          </Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </CardContent>
        <CardContent>
          <Button
            variant="outlined"
            startIcon={<ShoppingBagTwoToneIcon />}
            onClick={() => {
              handleOpen();
              // handleAddToCart();
            }}
          >
            Thêm vào giỏ hàng
          </Button>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{ width: 300, borderRadius: 5 }} className="card-item">
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Giày Nike Journal"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="300"
          image="https://res.cloudinary.com/dokp7ig0u/image/upload/v1717591652/department/nikeBlackWhite.png"
          alt="Nike"
        />
        <CardContent>
          <Typography variant="body2" fontSize="20px" color="text.secondary">
            Giá: 300 $
          </Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </CardContent>
        <CardContent>
          <Button
            variant="outlined"
            startIcon={<ShoppingBagTwoToneIcon />}
            onClick={handleAddToCart}
          >
            Thêm vào giỏ hàng
          </Button>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      {/* Modal san pham */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="modal-container-item">
              <div>
                <img
                  src="https://res.cloudinary.com/dokp7ig0u/image/upload/v1717591652/department/nikeBlackWhite.png"
                  height={300}
                  width={200}
                  alt="Nike"
                  className="modal-img-item"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                }}
              >
                <div>
                  <h3 style={{ fontSize: 20 }}>Giày Nike Journal</h3>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    readOnly
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                  <p className="p-modal">Giá: 300 $</p>
                  <p className="p-modal">
                    Mô tả : Nike là một thương hiệu giày dép và trang phục thể
                    thao đa quốc gia của Mỹ được thành lập vào năm 1964. Nike
                    nổi tiếng với những sản phẩm chất lượng cao,
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems:"center" }}>
                  <p className="p-modal">Số lượng : </p>
                  <Button
                    onClick={() => {
                      setCount(Math.max(count - 1, 0));
                    }}
                  >
                    <RemoveIcon />
                  </Button>
                  <p className="">{count}</p>
                  <Button
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    <AddIcon />
                  </Button>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: "20px",
                  }}
                >
                  <Button
                    variant="outlined"
                    startIcon={<ShoppingBagTwoToneIcon />}
                    onClick={handleAddToCart}
                  >
                    Thêm vào giỏ hàng
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    Hủy
                  </Button>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ItemCenter;
