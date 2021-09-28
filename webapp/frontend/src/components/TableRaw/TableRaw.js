// React
import React from "react";

// PropTypes
import PropTypes from "prop-types";

// Material
import { Container, Paper, Table, TableContainer } from "@material-ui/core";

// Components
import Header from "./Header";
import Body from "./Body";

const TableRaw = (props) => {
  // Variables
  const { classes, titles, rows, deleted } = props;

  //JSX
  let header = null;
  if (titles) {
    header = <Header titles={titles} editable />;
  }
  const view = (
    <Container className={classes.root}>
      <TableContainer
        className={classes.paper}
        component={Paper}
        variant="outlined"
      >
        <Table className={classes.table}>
          {header}
          <Body rows={rows} deleted={deleted} editable />
        </Table>
      </TableContainer>
    </Container>
  );

  return view;
};

// Typechecking
TableRaw.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    table: PropTypes.string.isRequired,
  }),
};

export default TableRaw;
