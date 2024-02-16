import React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';

import { Link } from 'react-router-dom';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
})

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomizedBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component={Link}
          to="/"
          label="Home"
        />
        <StyledBreadcrumb
          component={Link}
          to="/dashboard"
          label="Dashboard"
        />
        
        <StyledBreadcrumb
          component={Link}
          to="/sign-in"
          label="Sign in"
        />
        <StyledBreadcrumb
          component={Link}
          to="/login-in"
          label="Login"
        />
        <StyledBreadcrumb
          component={Link}
          to="/quiz"
          label="Quiz"
        />
      </Breadcrumbs>
    </div>
  );
}