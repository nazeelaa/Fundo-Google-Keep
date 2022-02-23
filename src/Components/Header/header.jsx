import React from "react";
import Box from '@mui/material/Box';

import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import TextField from '@mui/material/TextField';
import { IconButton, InputAdornment } from '@mui/material';
import '../Header/header.css'

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import { makeStyles } from '@mui/styles';

function HeaderContainer(props) {
  const clickedNav = () => {
    props.listenToHeader("clicked on me");
  }
  return (

    


    <Box className="containers" >

      <Box  className="firstbox"> 
        <MenuIcon onClick={clickedNav} fontSize="medium" />
        <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" id="keepimg" alt="img"/>
        <div className="textKeep"><p>Keep</p></div>
      </Box>


      <Box className='searchbar' >
        <TextField
          placeholder='search'
          size="small"
          style={{width:'100%',backgroundColor: '	rgb(211,211,211)' }}
          InputLabelProps={{ shrink: false }}
          InputProps={{
            endAdornment: (<InputAdornment><IconButton><SearchIcon /></IconButton></InputAdornment>
            )
          }}
        /></Box>   

      <Box className="threeIcons">
        <RefreshIcon fontSize="medium"/>
        <ViewAgendaOutlinedIcon fontSize="medium"/>
        <SettingsIcon fontSize="medium"/>
      </Box>

      <Box className='iconsheader'>

        <AppsIcon fontSize="large" />
        <AccountCircleIcon  fontSize="large"/>
      </Box>




    </Box>



  )
}

export default HeaderContainer
