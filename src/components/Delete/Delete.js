// import React from 'react';
// import {
//   AppBar,
//   Box,
//   Button,
//   Container,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   Toolbar,
//   Typography,
// } from '@mui/material';

// const labels = [
//   'Inbox',
//   'Starred',
//   'Sent',
//   'Drafts',
//   'Less',
//   'Snoozed',
//   'Important',
//   'Chats',
//   'Scheduled',
//   'All Mail',
//   'Spam',
//   'Trash',
// ];

// function Mailbox() {
//   const [drawerOpen, setDrawerOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   return (
//     <>
//       <AppBar position="static">
//         <Toolbar>
//           <Button color="inherit" onClick={handleDrawerToggle}>
//             Mail
//           </Button>
//         </Toolbar>
//       </AppBar>
//       <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
//         <List>
//           {labels.map((label) => (
//             <ListItem key={label} disablePadding>
//               <ListItemButton>
//                 <ListItemText primary={label} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <Container>
//         <Box mt={2}>
//           <Typography variant="h4">Your inbox</Typography>
//         </Box>
//       </Container>
//     </>
//   );
// }

// export default Mailbox;