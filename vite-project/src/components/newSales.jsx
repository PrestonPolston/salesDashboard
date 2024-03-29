import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { mockTransactions } from "./mockData";

function formatTransactionsData(data) {
  return data.map((item) => {
    return {
      txId: item.txId,
      user: item.user,
      date: new Date(item.date).toLocaleDateString(),
      cost: parseFloat(item.cost).toFixed(2),
    };
  });
}
const formattedTransactionsData = formatTransactionsData(mockTransactions);

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "population", label: "Population", minWidth: 170 },
  { id: "density", label: "Density", minWidth: 170 },
];

const rows = [];

export default function NewSales() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "50%" }}>
      {" "}
      <TableContainer sx={{ maxHeight: 440 }}>
        {" "}
        <Table stickyHeader aria-label="sticky table">
          {" "}
          <TableHead>
            {" "}
            <TableRow>
              {" "}
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="center"
                  style={{ minWidth: column.minWidth }}
                >
                  {" "}
                  {column.label}{" "}
                </TableCell>
              ))}{" "}
            </TableRow>{" "}
          </TableHead>{" "}
          <TableBody>
            {" "}
            {formattedTransactionsData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow key={index}>
                    {" "}
                    <TableCell align="center">{row.user}</TableCell>{" "}
                    <TableCell align="center"> {row.date} </TableCell>{" "}
                    <TableCell align="center"> ${row.cost} </TableCell>{" "}
                  </TableRow>
                );
              })}{" "}
          </TableBody>{" "}
        </Table>{" "}
      </TableContainer>{" "}
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={formattedTransactionsData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />{" "}
    </Paper>
  );
}
