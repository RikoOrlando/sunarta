import { memo } from "react";
import { Box } from "@mui/material";
import logo from "../assets/delivery-man.png";
import box from "../assets/package.png";
function SideBar() {
  return (
    <Box
      className="sidebar"
      minHeight="100vh"
      bgcolor="#182747"
      width={200}
      padding={2}
    >
      <Box
        display="flex"
        alignItems="center"
        color="white"
        gap={1}
        borderBottom="1px"
        borderColor="white"
      >
        <Box width={32} display="flex">
          <img src={logo} alt="logo" />
        </Box>
        Fast
      </Box>
      <Box color="white" padding={2} mt={2}>
        Menu
      </Box>
      <Box
        color="white"
        display="flex"
        alignItems="center"
        padding={2}
        gap={2}
        cursor="pointer"
      >
        <Box width={24} display="flex">
          <img src={box} alt="box" />
        </Box>
        Warehouse
      </Box>
    </Box>
  );
}

export default memo(SideBar);
