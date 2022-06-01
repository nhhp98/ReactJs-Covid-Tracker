import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import HighlightCard from "./HighlightCard";

const Highlight = ({ summary }) => {
  return (
    <Grid container spacing={3}>
      {summary.map((item) => (
        <Grid item sm={4} xs={12} key={item.type}>
          <HighlightCard
            title={item.title}
            count={item.count}
            type={item.type}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Highlight;
