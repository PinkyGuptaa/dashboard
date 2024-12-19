import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import DashboardCard from './DashboardCard';
import InsightSection from './InsightSection';
import OrderTable from './OrderTable';

const data = [
  { title: 'Consultations', value: 24, percentage: 15, isIncrease: true },
  { title: 'Orders Placed', value: 12, percentage: 15, isIncrease: false },
  { title: 'Conversion', value: '50%', percentage: 15, isIncrease: false },
  { title: 'Total Sales Value', value: '$2,400', percentage: 15, isIncrease: true },
  { title: 'Avg Order Value', value: '$240', percentage: 15, isIncrease: true },
  { title: 'Commission Paid', value: '$240', percentage: 15, isIncrease: true },
];

const Dashboard = () => {
  return (
    <Box p={3} sx={{ backgroundColor: '#f9fafb', minHeight: '100vh', padding:'50px'}}>
      {/* <Typography variant="h5" fontWeight="bold" mb={2}>
        At a glance
      </Typography> */}
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
      At a glance 
      </Typography>
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <DashboardCard
              title={item.title}
              value={item.value}
              percentage={item.percentage}
              isIncrease={item.isIncrease}
            />
        </Grid>
        ))}
      </Grid>
      <InsightSection/>
      <OrderTable/>
    </Box>
  );
};

export default Dashboard;


