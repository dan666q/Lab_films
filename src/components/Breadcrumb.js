// Breadcrumb.js
import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useLocation, Link as RouterLink } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {pathnames.length > 0 ? (
        <Link component={RouterLink} to="/">
          Home
        </Link>
      ) : (
        <Typography>Home</Typography>
      )}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;

        return index === pathnames.length - 1 ? (
          <Typography key={index}>{name}</Typography>
        ) : (
          <Link key={index} component={RouterLink} to={routeTo}>
            {name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
