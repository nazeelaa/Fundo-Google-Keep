import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';

import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';

import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import '../sidenav/sideNav.css'
import LightbulbIcon from '@mui/icons-material/Lightbulb';

import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

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
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
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

export default function MiniDrawer(props) {

  const openNotes=()=>{
    props.listenToSideNav("notes")
  }
  const openArchive=()=>{
    props.listenToSideNav("archive")
  }
  const openTrash=()=>{
    props.listenToSideNav("deleted")
  }
  const theme = useTheme();


  return (
   
      <Drawer variant="permanent" open={props.openNav}>
        
        <List>
          
            <ListItem button onClick={openNotes} >
              <ListItemIcon>
                <LightbulbIcon /> 
              </ListItemIcon>
              <ListItemText primary={"Notes"} />
            </ListItem>

            

            <ListItem button  onClick={openArchive} >
              <ListItemIcon>
                <ArchiveIcon /> 
              </ListItemIcon>
              <ListItemText primary={"Archive"} />
            </ListItem>

            <ListItem button  onClick={openTrash}>
              <ListItemIcon>
                <DeleteOutlineOutlinedIcon /> 
              </ListItemIcon>
              <ListItemText primary={"Trash"} />
            </ListItem>
        
        
        </List>
      </Drawer>
     
      
  );
}
