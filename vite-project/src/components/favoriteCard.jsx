import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Paper } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import BarChartIcon from "@mui/icons-material/BarChart";
import Typography from "@mui/material/Typography";
import { mockBarData } from "./mockData";

const processBarData = (data) => {
  const aggregatedSales = {};
  data.forEach((item) => {
    aggregatedSales["Burger"] = (aggregatedSales["Burger"] || 0) + item.burger;
    aggregatedSales["Kebab"] = (aggregatedSales["Kebab"] || 0) + item.kebab;
    aggregatedSales["Donut"] = (aggregatedSales["Donut"] || 0) + item.donut;
  });

  const sortedSales = Object.entries(aggregatedSales)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);

  const topThree = sortedSales.slice(0, 3);

  return topThree;
};
const topThreeProducts = processBarData(mockBarData);
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    {" "}
    <CardContent>
      {" "}
      <Typography variant="h5" component="div">
        {" "}
        Top Sellers{" "}
      </Typography>{" "}
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {" "}
        {topThreeProducts.map((product, index) => (
          <div key={index}>
            {" "}
            {product.name}: {product.value}{" "}
          </div>
        ))}{" "}
        <BarChartIcon />
      </Typography>{" "}
    </CardContent>{" "}
  </React.Fragment>
);

export default function FavoriteCard() {
  return (
    <Box>
      <Paper elevation={10}>
        <Card variant="outlined">{card}</Card>
      </Paper>
    </Box>
  );
}
