import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    width: "100%",
  },
  paper: {
    width: "90%",
    margin: "20px 5%",
  },
});

export default function AccountDetailsTable() {
  const classes = useStyles();

  let accountDetails = JSON.parse(localStorage.getItem("accountDetails"));
  const [currentAccountDetails, setCurrentAccountDetails] = React.useState(accountDetails);
  const deleteAccountDetails = (email) => {
    console.log("====> email: ", email);
    const newAccountDetails = [...accountDetails].filter(
      (ac) => ac.userEmail !== email
    );
    
    accountDetails = newAccountDetails;
    setCurrentAccountDetails([...accountDetails]);
    // console.log("====> accountDetails: ", accountDetails.length)
    // console.log("====> currentAccountDetails: ", currentAccountDetails.length)
    // console.log("====> newAccountDetails: ", newAccountDetails.length)
    localStorage.removeItem("accountDetails");
    localStorage.setItem("accountDetails", JSON.stringify([...newAccountDetails]));
  };

  const renderTableRows = () => {
    return accountDetails.map((row, index) => {
      return (
        <TableRow key={row.index}>
          <TableCell component="th" scope="row">
            {index + 1}
          </TableCell>
          <TableCell align="right">{row.userName}</TableCell>
          <TableCell align="right">{row.userEmail}</TableCell>
          <TableCell align="right">{row.loanAmount}</TableCell>
          <TableCell align="right">{row.loanType}</TableCell>
          <TableCell align="right">
            <Button
              variant="secondary"
              onClick={() => deleteAccountDetails(row.userEmail)}
            >
              Delete
            </Button>
          </TableCell>
        </TableRow>
      );
    });
  };
  return (
    <TableContainer component={Paper} className={classes.paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sl.No.</TableCell>
            <TableCell align="right">User Name</TableCell>
            <TableCell align="right">User Email</TableCell>
            <TableCell align="right">Loan Amount</TableCell>
            <TableCell align="right">Loan Type</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderTableRows()}</TableBody>
      </Table>
    </TableContainer>
  );
}
