import { memo } from "react";
import {
  Box,
  Breadcrumbs,
  Typography,
  Backdrop,
  Snackbar,
} from "@mui/material";
import Link from "@mui/material/Link";
import CircularProgress from "@mui/material/CircularProgress";
import useDetail from "./useDetail";
import { useParams } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
function Detail() {
  const params = useParams();
  const { isLoading, warehouses, columns, open, handleClose } = useDetail();
  return (
    <Box>
      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={handleClose}
        message="Sorry please refresh this page"
      />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Breadcrumbs aria-label="breadcrumb">
        <Typography color="text.primary">Home</Typography>
        <Link underline="hover" color="inherit" href="/">
          <Typography color="text.primary">Warehouse</Typography>
        </Link>
        <Typography color="text.primary">{params.id}</Typography>
      </Breadcrumbs>
      <Box mt={3} width="100%" height={400} display="flex">
        <DataGrid
          rowHeight={40}
          pageSize={10}
          columns={columns}
          rows={warehouses}
        />
      </Box>
    </Box>
  );
}

export default memo(Detail);
