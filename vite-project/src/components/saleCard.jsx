import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { mockBarData } from "./mockData";
import { Paper } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const calculateTotalSales = (data) => {
  let totalSales = 0;
  data.forEach((item) => {
    totalSales += item.burger + item.kebab + item.donut;
  });
  return totalSales;
};

const totalSales = calculateTotalSales(mockBarData);

export default function SaleCard() {
  return (
    <Box>
      <Paper elevation={10}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="div">
              Total Sales
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Total: {totalSales}
              <MonetizationOnIcon />
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </Box>
  );
}
