import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import Dashboard from './components/Dashboard';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { Tab } from '@mui/material';
import SummarizeIcon from '@mui/icons-material/Summarize';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedMenu, setSelectedMenu] = React.useState('Home'); // State for selected menu

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Menu items
  const menuItems = [
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'Message', icon: <ChatBubbleIcon /> },
    { text: 'Social', icon: <GroupsIcon /> },
  ];
 
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ marginRight: 5, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            
            <Tab label="Summary" icon={<SummarizeIcon />} />
            <Tab label="Sales" icon={<AttachMoneyIcon />} />
            <Tab label="Chats" icon={<ChatBubbleIcon />} />
          </Typography>
       
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={() => setSelectedMenu(item.text)} // Handle click to change the content
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: 'center',
                    mr: open ? 3 : 'auto',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {/* Conditional rendering based on selected menu */}
        {selectedMenu === 'Home' && <Dashboard />}
        {selectedMenu === 'Message' && <Typography>Message Section</Typography>}
        {selectedMenu === 'Social' && <Typography>Social Section</Typography>}
      </Box>
    </Box>
  );
}


// import * as React from 'react';
// import { Box, CssBaseline, Toolbar, Typography, AppBar, Tab, Tabs } from '@mui/material';
// import HomeIcon from '@mui/icons-material/Home';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
// import Dashboard from './components/Dashboard'; // Assuming Dashboard is your summary component

// export default function App() {
//   const [selectedTab, setSelectedTab] = React.useState(0); // State for selected tab

//   const handleTabChange = (event, newValue) => {
//     setSelectedTab(newValue); // Change tab on click
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       {/* AppBar with Tabs */}
//       <AppBar position="fixed">
//         <Toolbar>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             Dashboard
//           </Typography>
//           <Tabs value={selectedTab} onChange={handleTabChange} textColor="inherit" indicatorColor="secondary">
//             <Tab label="Summary" icon={<HomeIcon />} />
//             <Tab label="Sales" icon={<ShoppingCartIcon />} />
//             <Tab label="Chats" icon={<ChatBubbleIcon />} />
//           </Tabs>
//         </Toolbar>
//       </AppBar>

//       <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 8 }}>
//         {/* Conditional rendering based on selected tab */}
//         {selectedTab === 0 && <Dashboard />} {/* Summary Section */}
//         {selectedTab === 1 && <Typography variant="h6">Sales Section</Typography>} {/* Sales Section */}
//         {selectedTab === 2 && <Typography variant="h6">Chats Section</Typography>} {/* Chats Section */}
//       </Box>
//     </Box>
//   );
// }
