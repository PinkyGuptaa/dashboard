import React from 'react';
import { Box, Card, CardContent, Typography, Stack } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const DashboardCard = ({ title, value, percentage, isIncrease }) => {
  return (
    <Card sx={{ minWidth: 200, borderRadius: 3, boxShadow: 2 }}>
      <CardContent>
        <Typography variant="body2" color="textSecondary" fontWeight="bold">
          {title.toUpperCase()}
        </Typography>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
          <Typography variant="h5" fontWeight="bold">
            {value}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            {isIncrease ? (
              <ArrowUpwardIcon color="success" fontSize="small" />
            ) : (
              <ArrowDownwardIcon color="error" fontSize="small" />
            )}
            <Typography
              variant="body2"
              color={isIncrease ? 'success.main' : 'error.main'}
              fontWeight="medium"
            >
              {percentage}% {isIncrease ? 'increase' : 'decrease'}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
