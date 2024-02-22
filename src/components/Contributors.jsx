import React, { useState, useEffect } from "react";
// import {mockTransactions} from '../MockData';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Paper,
  TableContainer,
  Button,
} from "@mui/material";

export default function Customers() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      //Apparently I need this? Simulating a delay to mimic asynchronous behavior (e.g., fetching data)
      setTimeout(() => {
        setData(mockTransactions);
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Cost (USD)</TableCell>
              <TableCell>Drink Order</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((transaction) => (
              <TableRow key={transaction.txId}>
                <TableCell>{transaction.txId}</TableCell>
                <TableCell>{transaction.user}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.cost}</TableCell>
                <TableCell>{transaction.drinkOrder}</TableCell>
                <TableCell>
                  <img
                    src={transaction.image}
                    alt={`Image for ${transaction.user}`}
                    style={{ maxWidth: "50px", maxHeight: "50px" }}
                  />
                </TableCell>
                <TableCell>
                  <Button
                  // variant="contained"
                  // size="small"
                  // href={`https://dummyjson.com/products/${transaction.txId}`}
                  // target="_blank"
                  >
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}