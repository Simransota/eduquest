import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';

export default function who() {
  return React.createElement(Card, {
    size: "lg",
    variant: "plain",
    orientation: "horizontal",
    sx: {
      textAlign: 'center',
      maxWidth: '100%',
      width: 500,
      resize: 'horizontal',
      overflow: 'auto'
    }
  }, React.createElement(CardOverflow, {
    variant: "solid",
    color: "white",
    sx: {
      flex: '0 0 200px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      px: 'var(--Card-padding)'
    }
  }, React.createElement(Typography, {
    fontSize: "xl4",
    fontWeight: "xl",
    textColor: "#fff"
  }, ""), React.createElement(Typography, {
    textColor: "primary.200"
  }, "")), React.createElement(CardContent, {
    sx: {
      gap: 1.5,
      minWidth: 200
    }
  }, React.createElement(AspectRatio, {
    ratio: "19/8",
    objectFit: "contain",
    variant: "plain"
  }, React.createElement("img", {
    alt: "",
    src: "https://static.vecteezy.com/system/resources/previews/006/409/485/original/people-thinking-to-make-decision-problem-solving-and-find-creative-ideas-with-question-mark-in-flat-cartoon-background-for-poster-illustration-vector.jpg"
  })), React.createElement(CardContent, null, React.createElement(Typography, {
    level: "title-lg"
  }, "Students"), React.createElement(Typography, {
    fontSize: "sm",
    sx: {
      mt: 0.5
    }
  }, "Our platform is tailored just for students! Whether you're navigating through the complexities of academic subjects, seeking resources to ace your exams, or exploring opportunities to broaden your horizons, we've got you covered. ")), ));
}
