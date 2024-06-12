import { Button, IconButton } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function CartItem() {
  const [count, setCount] = React.useState<number>(0);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <img
          src="https://res.cloudinary.com/dokp7ig0u/image/upload/v1717591652/department/nikeBlackWhite.png"
          height={100}
          width={100}
          alt="Nike"
          className="modal-img-item"
        />

        <div>
          <h3 style={{ fontSize: 20 }}>Giày Nike Journal</h3>
          <p className="p-CartItem">Loại : 49 Đen</p>
        </div>

        <div style={{
            textAlign: "center",
        }}>
          <p className="p-CartItem">Giá: 300 $</p>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100px",
            }}
          >
            <IconButton>
                 <FavoriteBorderIcon/>
            </IconButton>
            <IconButton>
                 <DeleteOutlineIcon/>
            </IconButton>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
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
      </div>
    </div>
  );
}

export default CartItem;
