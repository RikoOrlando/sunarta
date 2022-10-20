import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";

function formatDate(val) {
  return dayjs(val).format("DD MMM YYYY");
}

function useDetail() {
  const params = useParams();
  const [open, setIsOpen] = useState(false);
  const [isLoading, seIIsLoading] = useState(true);
  const [warehouses, setWarehouses] = useState([]);
  const [columns] = useState([
    {
      field: "WarehouseID",
      headerName: "ID",
      width: 90,
    },
    { field: "Branch", headerName: "Branch", width: 200 },
    {
      field: "LastModifiedDateTime",
      headerName: "Last Modified Date Time",
      width: 200,
      valueGetter: ({ row }) => formatDate(row.LastModifiedDateTime),
    },
    {
      field: "LastSync",
      headerName: "Last Sync",
      width: 200,
      valueGetter: ({ row }) => formatDate(row.LastSync),
    },
    { field: "Description", headerName: "Description", width: 400 },
  ]);
  useEffect(() => {
    axios
      .get(`https://api.belajartableau.com/api/WarehouseReps/${params.id}`)
      .then(({ data }) => {
        setWarehouses([{ ...data, id: "dum" }]);
      })
      .catch(() => {
        setIsOpen(true);
      })
      .finally(() => seIIsLoading(false));
  }, []);
  const handleClose = () => {
    setIsOpen(false);
  };
  return { isLoading, warehouses, columns, handleClose, open };
}

export default useDetail;
