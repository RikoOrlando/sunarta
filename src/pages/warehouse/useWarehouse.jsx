import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function RenderCell(params) {
  return (
    <Link to={`/${params.row.WarehouseID}`}>
      <div>{params.row.WarehouseID}</div>
    </Link>
  );
}

function useWarehouse() {
  const [open, setIsOpen] = useState(false);
  const [isLoading, seIIsLoading] = useState(true);
  const [warehouses, setWarehouses] = useState([]);
  const [columns] = useState([
    {
      field: "WarehouseID",
      headerName: "ID",
      width: 90,
      renderCell: RenderCell,
    },
    { field: "Branch", headerName: "Branch", width: 200 },
    { field: "Description", headerName: "Description", width: 400 },
  ]);
  useEffect(() => {
    axios
      .get("https://api.belajartableau.com/api/WarehouseReps")
      .then(({ data }) => {
        const formated = data.map((el, i) => ({ ...el, id: i }));
        setWarehouses(formated);
      })
      .catch(() => {
        setIsOpen(true);
      })
      .finally(() => {
        seIIsLoading(false);
      });
  }, []);
  const handleClose = () => {
    setIsOpen(false);
  };
  return { isLoading, warehouses, columns, handleClose, open };
}

export default useWarehouse;
