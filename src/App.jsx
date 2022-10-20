import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Warehouse from "./pages/warehouse";
import Detail from "./pages/detail";
import "./App.css";

function App() {
  return (
    <Box minHeight="100vh" display="flex">
      <SideBar />
      <Box padding={4} flex={1}>
        <Routes>
          <Route path="/" element={<Warehouse />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
