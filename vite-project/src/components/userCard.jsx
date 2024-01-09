import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { mockTransactions } from "./mockData";
import { Paper } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const countUniqueUsers = (transactions) => {
  const uniqueUserNames = new Set(
    transactions.map((transaction) => transaction.user)
  );
  return uniqueUserNames.size;
};

const totalUsers = countUniqueUsers(mockTransactions);

export default function UserCard() {
  return (
    <Box>
      <Paper elevation={10}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="div">
              Total Users
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Total: {totalUsers} <br />
              <PersonIcon />
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </Box>
  );
}
