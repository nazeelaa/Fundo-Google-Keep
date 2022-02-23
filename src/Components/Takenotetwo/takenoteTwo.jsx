import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../Takenotetwo/takenoteTwo.css';
import PushPinIcon from '@mui/icons-material/PushPin';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Button from '@mui/material/Button';
import { postNotes } from '../../Service/dataService';
import SimplePopper from "../Colorpopper/colorpopper";


function TakenoteTwo(props) {

  const [heading, setHeading] = React.useState({ title: "", description: "", color: "", isArchived: false})
  

  const onsubmit = () => {

    const data = new FormData()
    data.append('title', heading.title)
    data.append('description', heading.description)
    data.append('color', heading.color)
    data.append('isArchived',heading.isArchived)

    postNotes(data).then((response) => {
      console.log(response)
      props.notesFromServer()
    }).catch((error) => {
      console.log(error)
    })
    props.listenTakenoteOne(false)
  }

  const listenToPopper = (data) => {
    console.log(data)
    setHeading({ ...heading, color: data })
  }

  const takeTitle = (event) => {

    setHeading({ ...heading, title: event.target.value })

  }
  const takeDescription = (event) => {

    setHeading({ ...heading, description: event.target.value })
  }

  const setIsArchive=(data)=>{
    console.log(data)
    setHeading({...heading, isArchived:true })
}

 
  return (
    <Box className='notetwobox'sx={{ backgroundColor: 'heading.color' }}> 

    <Box className='singleicon' >
        <div className='Rowone'>

            <Box id='Rowone'>
                <InputBase
                    onChange={takeTitle}
                    placeholder="Title"
                    style={{ backgroundColor: heading.color }}
                />
            </Box>
            
            <Box
                sx={{
                    width: '10%',
                    height: '100%', display: 'flex', alignItems: 'center',
                    justifyContent: 'center',
                    //marginRight: '10px'

                }}>
                <PushPinIcon />
            </Box>
        </div>
    </Box>

    <Box className='notetwosearch'>
        <InputBase
            onChange={takeDescription}
            placeholder="Take a Note..."
            style={{ backgroundColor: heading.color }}
        />
    </Box>

    <Box className='notetwoicon'>
        
        <div className='icons'>
            <Box id='icons' >
                <AddAlertOutlinedIcon htmlColor="grey"/>
                <PersonAddAltOutlinedIcon htmlColor="grey"/>
                <SimplePopper htmlColor="grey" listenToPopper={listenToPopper} action="create" />
                <ImageOutlinedIcon htmlColor="grey" />
                <ArchiveOutlinedIcon  htmlColor="grey" onClick={setIsArchive} />
                <MoreVertOutlinedIcon htmlColor="grey" />
                <UndoOutlinedIcon htmlColor="grey" />
                <RedoOutlinedIcon htmlColor="grey" />
            </Box>
            <Box className='close'>
               
                <Button size="small" onClick={onsubmit}  >Close </Button>
            </Box>
        </div>
    </Box>
</Box>
)

    
    


    



  
}
export default TakenoteTwo
