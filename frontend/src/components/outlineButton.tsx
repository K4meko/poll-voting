import React, {ReactNode} from "react";
import Button from "@mui/material/Button";
import {styled} from "@mui/material/styles";

interface OutlinedButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const OutlinedButton = styled(Button)(({theme}) => ({
  textTransform: "none",
  borderRadius: "8px",
  border: "1px solid transparent",
  padding: "0.6em 1.2em",
  fontSize: "1em",
  color: theme.palette.mode === "dark" ? "white" : "black",

  fontWeight: 500,

  backgroundColor: theme.palette.mode === "dark" ? "#1a1a1a" : "#f5f5f5",
  cursor: "pointer",
  transition: "border-color 0.25s",
  "&:hover": {
    borderColor: theme.palette.primary.main,
  },
  "&:focus": {
    outline: "4px auto -webkit-focus-ring-color",
  },
  "&:focus-visible": {
    outline: "4px auto -webkit-focus-ring-color",
  },
}));

export default OutlinedButton;
