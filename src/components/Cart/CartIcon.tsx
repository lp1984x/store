import React from "react";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { handleShow } from "../../store/features/cartSlice";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -4,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "4px 0 2px",
  },
}));

export default function CartIcon() {
  const dispatch = useAppDispatch();
  const filling = useAppSelector((state) => state.cart.cartFilling);
  return (
    <IconButton
      aria-label="cart"
      onClick={() => {
        dispatch(handleShow());
      }}
    >
      <StyledBadge badgeContent={filling.length} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
