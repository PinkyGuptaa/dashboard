// import * as React from 'react';
// import { Box, Typography, Paper, Grid } from '@mui/material';
// import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer,ComposedChart } from 'recharts';

// const dataConsultations = [
//   { name: 'Mon', Incoming: 30, Answered: 25, Experts: 10 },
//   { name: 'Tue', Incoming: 35, Answered: 30, Experts: 12 },
//   { name: 'Wed', Incoming: 40, Answered: 35, Experts: 15 },
//   { name: 'Thu', Incoming: 50, Answered: 20, Experts: 18 },
//   { name: 'Fri', Incoming: 45, Answered: 33, Experts: 14 },
//   { name: 'Sat', Incoming: 48, Answered: 34, Experts: 13 },
//   { name: 'Sun', Incoming: 55, Answered: 40, Experts: 15 },
// ];

// const dataComparison = [
//   { name: 'This Week', Consultations: 20, Orders: 18 },
//   { name: 'Last Week', Consultations: 18, Orders: 15 },
// ];

// export default function () {
//   return (
//     <div>
      
//       <Typography variant="h4" sx={{ marginTop: 5,mb: 3, fontWeight: 'bold' }}>
//       Insights 
//       </Typography>
//       {/* Existing Section */}
//       <Grid container spacing={3}>
//         {/* Consultations Line Chart */}
//         <Grid item xs={12} md={8}>
//           <Paper elevation={3} sx={{ padding: 2 }}>
//             <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
//               CONSULTATIONS
//             </Typography>
        
//              <ResponsiveContainer width="100%" height={300}>
//               <ComposedChart data={dataConsultations}>
//                 <CartesianGrid stroke="#f5f5f5" />
//                 <XAxis dataKey="name" />
//                 <YAxis yAxisId="left" />
//                 <YAxis yAxisId="right" orientation="right" />
//                 <Tooltip />
//                 <Legend />
//                 <Bar yAxisId="right" dataKey="Experts" fill="#ffea99" name="Experts Online" />
//                 <Line yAxisId="left" type="monotone" dataKey="Incoming" stroke="#666" name="Incoming" />
//                 <Line yAxisId="left" type="monotone" dataKey="Answered" stroke="#00aa72" name="Answered" />
//               </ComposedChart>
//             </ResponsiveContainer>
//           </Paper>
//         </Grid>

//         {/* Comparison Bar Chart */}
//         <Grid item xs={12} md={4}>
//           <Paper elevation={3} sx={{ padding: 2 }}>
//             <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
//               VS PAST PERIOD
//             </Typography>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={dataComparison}>
//                 <CartesianGrid stroke="#f5f5f5" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="Consultations" fill="#00d1b2" />
//                 <Bar dataKey="Orders" fill="#004d40" />
//               </BarChart>
//             </ResponsiveContainer>
//           </Paper>
//         </Grid>

//         {/* Forecast Section */}
//         <Grid item xs={12} md={4}>
//           <Paper elevation={3} sx={{ padding: 3, backgroundColor: '#00d1b2', color: 'white' }}>
//             <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
//               +15%
//             </Typography>
//             <Typography>forecasted increase in sales closed by the end of the current month</Typography>
//             <Typography variant="h4" sx={{ fontWeight: 'bold', marginTop: 2 }}>
//               +20%
//             </Typography>
//             <Typography>forecasted increase in consultations by the end of the current month</Typography>
//           </Paper>
//         </Grid>
//       </Grid>

      
//       </div>
//   );
// }


import * as React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer, ComposedChart } from 'recharts';

const dataConsultations = [
  { name: 'Mon', Incoming: 30, Answered: 25, Experts: 10 },
  { name: 'Tue', Incoming: 35, Answered: 30, Experts: 12 },
  { name: 'Wed', Incoming: 40, Answered: 35, Experts: 15 },
  { name: 'Thu', Incoming: 50, Answered: 20, Experts: 18 },
  { name: 'Fri', Incoming: 45, Answered: 33, Experts: 14 },
  { name: 'Sat', Incoming: 48, Answered: 34, Experts: 13 },
  { name: 'Sun', Incoming: 55, Answered: 40, Experts: 15 },
];

const dataComparison = [
  { name: 'This Week', Consultations: 20, Orders: 18 },
  { name: 'Last Week', Consultations: 18, Orders: 15 },
];

export default function () {
  return (
    <div>
      <Typography variant="h4" sx={{ marginTop: 5, mb: 3, fontWeight: 'bold' }}>
        Insights
      </Typography>
      {/* Existing Section */}
      <Grid container spacing={3}>
        {/* Consultations Line Chart (50%) */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              CONSULTATIONS
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={dataConsultations}>
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="right" dataKey="Experts" fill="#ffea99" name="Experts Online" />
                <Line yAxisId="left" type="monotone" dataKey="Incoming" stroke="#666" name="Incoming" />
                <Line yAxisId="left" type="monotone" dataKey="Answered" stroke="#00aa72" name="Answered" />
              </ComposedChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Comparison Bar Chart (25%) */}
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              VS PAST PERIOD
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dataComparison}>
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Consultations" fill="#00d1b2" />
                <Bar dataKey="Orders" fill="#004d40" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Forecast Section (25%) */}
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ padding: 3, backgroundColor: '#00d1b2', color: 'white' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              +15%
            </Typography>
            <Typography>forecasted increase in sales closed by the end of the current month</Typography>
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginTop: 2 }}>
              +20%
            </Typography>
            <Typography >forecasted increase in consultations by the end of the current month</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
