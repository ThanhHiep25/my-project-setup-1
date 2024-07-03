import './Css/itemcart.css';

import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, IconButton } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

function CartItem() {
  const [count, setCount] = React.useState<number>(0);
  return (
    <div  style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: 800,

        }}

        className="div-container-item-hover"
      >
        <img
          src="https://res.cloudinary.com/dokp7ig0u/image/upload/v1717591652/department/nikeBlackWhite.png"
          height={80}
          width={80}
          alt="Nike"
          style={{
            borderRadius:"10px"
          }}
        />

        <div>
          <h3 style={{ fontSize: 20 }}>Giày Nike Journal</h3>
          <p className="p-CartItem">Loại : 49 Đen</p>
        </div>

        <div
          style={{
            textAlign: "center",
          }}
        >
          <p className="p-CartItem">Giá: 300.000 VND</p>

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
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton>
              <DeleteOutlineIcon />
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
      <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 38 } }}/>
    </div>
  );
}

export default CartItem;
