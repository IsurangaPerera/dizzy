// React
import React from "react";

// Material
import { TablePagination, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";

// Styles
import { useStyles } from "./WalletTransactions-styles";


export const WalletTransactions = (props) => {
  // Variables
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    {id: "id", label: "Id", align: "center"},
    {id: "block", label: "Block", align: "left"},
    {id: "date", label: "Date", align: "left"},
    {id: "role", label: "Source", align: "left"},
    {id: "amount", label: "Value (₿)", align: "left"}
  ];

  const rows = [
    {id: "d86dd0d0b3a0851a0556", block: "452213", date: "2020-11-03 16:31:21", role: "Input", amount: "23"},
    {id: "d86dd0egv3a0851a0556", block: "4342213", date: "2020-11-03 16:31:21", role: "Input", amount: "23"},
    {id: "d86dd0d0b3a0851a0556", block: "5672213", date: "2020-11-03 16:31:21", role: "Output", amount: "23"},
    {id: "erfdd0d0b3a0851a0556", block: "82213", date: "2020-11-03 16:31:21", role: "Input", amount: "23"},
    {id: "d86ddfd0b3a0851a0556", block: "98213", date: "2020-11-03 16:31:21", role: "Output", amount: "23"},
  ];

  // JSX
  const body =
      rows.map((row) => {
        return (
            <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
              {columns.map((column) => {
                return (
                    <TableCell key={column.id} align={column.align}>
                      {row[column.id]}
                    </TableCell>
                );
              })}
            </TableRow>
        );
      });

  const view = (
      <div id="hesh" className={classes.root}>
       <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            { body }
          </TableBody>
        </Table>
      </TableContainer>
       <TablePagination
        rowsPerPageOptions={ [10, 25, 100] }
        component="div"
        count={ rows.length }
        rowsPerPage={ rowsPerPage }
        page={page}
        onChangePage={ handleChangePage }
        onChangeRowsPerPage={ handleChangeRowsPerPage }
      />
      </div>
  );

  return view;
};

export default WalletTransactions;
