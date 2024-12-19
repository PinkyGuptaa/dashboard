// import React, { useState } from 'react';
// import {
//   Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
//   TableSortLabel, TablePagination, Paper, Typography
// } from '@mui/material';


// const createData = (product, date, timeSpent, orderValue, commission) => ({ product, date, timeSpent, orderValue, commission});
// const rows = [
//   createData('Laptop', '2024-12-01 09:30:00', 5, 1500, 150),
//   createData('Phone', '2024-12-02 10:15:00', 3, 800, 80),
//   createData('Headphones', '2024-12-03 11:45:00', 2, 200, 20),
//   createData('Tablet', '2024-12-04 14:00:00', 4, 1200, 120),
//   createData('Monitor', '2024-12-05 16:30:00', 6, 700, 70),
//   createData('Keyboard', '2024-12-06 18:00:00', 1, 100, 10),
//   createData('Mouse', '2024-12-07 19:15:00', 1.5, 50, 5),
// ];

// export default function SortablePaginatedTable() {
//   const [order, setOrder] = useState('asc');
//   const [orderBy, setOrderBy] = useState('name');
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleRequestSort = (property) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const sortedRows = [...rows].sort((a, b) => {
//     if (order === 'asc') {
//       return a[orderBy] < b[orderBy] ? -1 : 1;
//     } else {
//       return a[orderBy] > b[orderBy] ? -1 : 1;
//     }
//   });

//   const visibleRows = sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

//   return (
//     <Paper sx={{ width: '100%', mb: 2, p: 2 }}>
//       <Typography variant="h6" sx={{ mb: 2 }}>
//         Orders
//       </Typography>
//       <TableContainer>
//         <Table>
//           <TableHead>
//             <TableRow style={{textw:'bold'}}>
//               {['Product', 'Date', 'Time Spent', 'Order Value', 'Commission'].map((col) => (
//                 <TableCell key={col}>
//                   <TableSortLabel
//                     active={orderBy === col}
//                     direction={orderBy === col ? order : 'asc'}
//                     onClick={() => handleRequestSort(col)}
//                   >
//                     {col.charAt(0).toUpperCase() + col.slice(1)}
//                   </TableSortLabel>
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {visibleRows.map((row, index) => (
//               <TableRow key={index}>
                
//                 <TableCell>{row.product}</TableCell>
//                 <TableCell>{row.date}</TableCell>
//                 <TableCell>{row.timeSpent}</TableCell>
//                 <TableCell>{row.orderValue}</TableCell>
//                 <TableCell>{row.commission}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[5, 10, 15]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// }
//2nd
// import React, { useState } from 'react';
// import {
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TableSortLabel,
//   TablePagination,
//   Typography,
//   Tooltip,
// } from '@mui/material';

// const createData = (product, date, timeSpent, orderValue, commission) => ({
//   product,
//   date,
//   timeSpent,
//   orderValue,
//   commission,
// });

// const rows = [
//   createData('Laptop', '2024-12-01 09:30:00', 5, 1500, 150),
//   createData('Phone', '2024-12-02 10:15:00', 3, 800, 80),
//   createData('Headphones', '2024-12-03 11:45:00', 2, 200, 20),
//   createData('Tablet', '2024-12-04 14:00:00', 4, 1200, 120),
//   createData('Monitor', '2024-12-05 16:30:00', 6, 700, 70),
//   createData('Keyboard', '2024-12-06 18:00:00', 1, 100, 10),
//   createData('Mouse', '2024-12-07 19:15:00', 1.5, 50, 5),
// ];

// export default function SortablePaginatedTable() {
//   const [order, setOrder] = useState('asc');
//   const [orderBy, setOrderBy] = useState('product');
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleRequestSort = (property) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const sortedRows = [...rows].sort((a, b) => {
//     if (order === 'asc') {
//       return a[orderBy] < b[orderBy] ? -1 : 1;
//     } else {
//       return a[orderBy] > b[orderBy] ? -1 : 1;
//     }
//   });

//   const visibleRows = sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

//   return (
//     // <Paper sx={{ width: '100%', mb: 2, p: 2 }}>
//     <div>
//       <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold'}}>
//         Orders Summary
//       </Typography>
//       <TableContainer>
//         <Table>
//           <TableHead>
//             <TableRow>
//               {['product', 'date', 'timeSpent', 'orderValue', 'commission'].map((col) => (
//                 <TableCell
//                   key={col}
//                   sx={{
//                     fontWeight: 'bold',
//                     backgroundColor: '#f5f5f5',
//                     textTransform: 'capitalize',
//                     borderBottom: '2px solid #ddd',
//                   }}
//                 >
//                   <Tooltip title={`Sort by ${col}`} arrow>
//                     <TableSortLabel
//                       active={orderBy === col}
//                       direction={orderBy === col ? order : 'asc'}
//                       onClick={() => handleRequestSort(col)}
//                       sx={{
//                         '&.Mui-active': { color: '#1976d2' },
//                       }}
//                     >
//                       {col.replace(/([A-Z])/g, ' $1').charAt(0).toUpperCase() + col.slice(1)}
//                     </TableSortLabel>
//                   </Tooltip>
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {visibleRows.map((row, index) => (
//               <TableRow
//                 key={index}
//                 sx={{
//                   '&:nth-of-type(even)': { backgroundColor: '#f9f9f9' },
//                   '&:hover': { backgroundColor: '#e0f7fa' },
//                 }}
//               >
//                 <TableCell>{row.product}</TableCell>
//                 <TableCell>{row.date}</TableCell>
//                 <TableCell>{row.timeSpent}</TableCell>
//                 <TableCell>{row.orderValue}</TableCell>
//                 <TableCell>{row.commission}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[5, 10, 15]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//         sx={{
//           '.MuiTablePagination-actions': { color: '#1976d2' },
//           '.MuiSelect-select': { padding: '8px' },
//         }}
//       />
//     {/* </Paper> */}</div>
//   );
// }


import React, { useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TablePagination,
  Typography,
  Tooltip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Box,
  IconButton,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const createData = (product, date, timeSpent, orderValue, commission) => ({
  product,
  date,
  timeSpent,
  orderValue,
  commission,
});

const rows = [
  createData('Laptop', '2024-12-01 09:30:00', 5, 1500, 150),
  createData('Phone', '2024-12-02 10:15:00', 3, 800, 80),
  createData('Headphones', '2024-12-03 11:45:00', 2, 200, 20),
  createData('Tablet', '2024-12-04 14:00:00', 4, 1200, 120),
  createData('Monitor', '2024-12-05 16:30:00', 6, 700, 70),
  createData('Keyboard', '2024-12-06 18:00:00', 1, 100, 10),
  createData('Mouse', '2024-12-07 19:15:00', 1.5, 50, 5),
];

export default function OrderTable() {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('product');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatRow, setChatRow] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortedRows = [...rows].sort((a, b) => {
    if (order === 'asc') {
      return a[orderBy] < b[orderBy] ? -1 : 1;
    } else {
      return a[orderBy] > b[orderBy] ? -1 : 1;
    }
  });

  const visibleRows = sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleOpenChat = (row) => {
    setChatRow(row);
    setChatMessages([]);
    setChatOpen(true);
  };

  const handleCloseChat = () => {
    setChatOpen(false);
    setChatRow(null);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setChatMessages([...chatMessages, { sender: 'User', text: newMessage }]);
      setNewMessage('');

      // Simulate AI response
      setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          { sender: 'AI', text: `This is an AI response to: "${newMessage}"` },
        ]);
      }, 500);
    }
  };

  return (
    // <Paper sx={{ width: '100%', mb: 2, p: 2 }}>
    <div>
      <Typography variant="h4" sx={{ marginTop: 5,mb: 3, fontWeight: 'bold' }}>
        Orders 
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {['product', 'date', 'timeSpent', 'orderValue', 'commission', 'action'].map((col) => (
                <TableCell
                  key={col}
                  sx={{
                    fontWeight: 'bold',
                    backgroundColor: '#f5f5f5',
                    textTransform: 'capitalize',
                    borderBottom: '2px solid #ddd',
                  }}
                >
                  {col === 'action' ? 'Actions' : col.replace(/([A-Z])/g, ' $1').charAt(0).toUpperCase() + col.slice(1)}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  '&:nth-of-type(even)': { backgroundColor: '#f9f9f9' },
                  '&:hover': { backgroundColor: '#e0f7fa' },
                }}
              >
                <TableCell>{row.product}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.timeSpent}</TableCell>
                {/* <TableCell>{row.orderValue}</TableCell>
                <TableCell>{row.commission}</TableCell> */}
                <TableCell>{`$${row.orderValue}`}</TableCell>
                <TableCell>{`$${row.commission}`}</TableCell>

                <TableCell onClick={() => handleOpenChat(row)}>
                  {/* <Button variant="outlined" color="primary" onClick={() => handleOpenChat(row)}> */}
                    View Chat ↗
                  {/* </Button> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      {/* Chat Modal */}
      <Dialog open={chatOpen} onClose={handleCloseChat} fullWidth maxWidth="sm">
        <DialogTitle>Chat with AI for {chatRow?.product}</DialogTitle>
        <DialogContent>
          <Box sx={{ mb: 2, height: '300px', overflowY: 'auto', p: 2, backgroundColor: '#f9f9f9', borderRadius: 2 }}>
            {chatMessages.map((msg, i) => (
              <Typography
                key={i}
                align={msg.sender === 'User' ? 'right' : 'left'}
                sx={{
                  mb: 1,
                  p: 1,
                  borderRadius: 1,
                  backgroundColor: msg.sender === 'User' ? '#e3f2fd' : '#c8e6c9',
                  display: 'inline-block',
                }}
              >
                {msg.text}
              </Typography>
            ))}
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <IconButton color="primary" onClick={handleSendMessage}>
              <SendIcon />
            </IconButton>
          </Box>
        </DialogContent>
      </Dialog>
    {/* // </Paper> */}
    </div>
  );
}
