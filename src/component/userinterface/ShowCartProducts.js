import { useSelector } from "react-redux";
import { Button, Divider, Paper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function ShowCartProducts(props) {
  var navigate = useNavigate();
  try {
    var prd = JSON.parse(Cookies.get("CART"));
  } catch {
    prd = {};
  }

  var products = useSelector((state) => state.data);
  var keys = Object?.keys(prd);
  var products = Object?.values(prd);

  const showProducts = () => {
    return products.map((item) => {
      return (
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>{item.productname}</div>
            <div>qty:{item.qty}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <Paper
      elevation={2}
      style={{
        display: props.isOpen ? "flex" : "none",
        position: "absolute",
        top: 55,
        right: 80,
        zIndex: 2,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 230,
          height: "auto",
          margin: 5,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>Order Summery</div>
          <div>{keys.length}items</div>
        </div>
        <Divider style={{ marginBottom: 10 }} />
        {showProducts()}
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <Button
            variant="contained"
            onClick={() => navigate("/cart")}
            style={{
              display: "flex",
              background: "#00391c",
              margin: 10,
              color: "#fff",
              width: 300,
              height: 40,
            }}
          >
            Proceed to Cart
          </Button>
        </div>
      </div>
    </Paper>
  );
}
