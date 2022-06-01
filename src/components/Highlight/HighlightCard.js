import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import "./Highlight.css";

const HighlightCard = ({ title, count, type }) => {
  return (
    <>
      <Card className={`wrapper-${type}`}>
        <CardContent>
          <Typography
            component="p"
            variant="body2"
            style={{
              fontSize: 18,
              marginBottom: 5,
            }}
          >
            {title}
          </Typography>
          <Typography
            component="span"
            variant="body2"
            style={{
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            {count}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default HighlightCard;
