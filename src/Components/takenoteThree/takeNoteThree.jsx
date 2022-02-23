import React from 'react';
import '../takenoteThree/takeNoteThree.css';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ArchiveUpdate, updateNote,deleteData } from '../../Service/dataService'
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Modal from '@mui/material/Modal';
import SimplePopper from '../Colorpopper/colorpopper';
import Button from '@mui/material/Button';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { makeStyles } from '@mui/styles';




const useStyles = makeStyles(() => ({

  myNotes : {
   
   "@media only screen and (min-width:320px) and (max-width : 480px)" :{
      height:'120px',
      width:'80%',
      position:'absolute',
      left:'10%',
      top:'30%',
      display:'flex',
      justifyContent:'space-between'       
   }
  }
  
  
    
}))



  
  
    




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,

  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


 function TakeNoteThree(props) {

  const ClassNames = useStyles();
  const [open, setOpen] = React.useState(false);
  const [isDeleted,setIsDeleted]=React.useState(false)

  const handleClose = () => setOpen(false);
  const [editNoteObj, setEditNoteObj] = React.useState({ title: "", description: "", id: "" })



  const handleOpen = () => {

    setEditNoteObj({ ...editNoteObj, title: props.note.title, description: props.note.description, id: props.note.id })

    setOpen(true);
  }

  const editTitle = (e) => {
    setEditNoteObj({ ...editNoteObj, title: e.target.value })

  }
  const editDesc = (e) => {
    setEditNoteObj({ ...editNoteObj, description: e.target.value })


  }


  console.log(props)

  const updateArchive = () => {
    console.log("jj")
    let obj = {
      noteIdList: [props.note.id],
      isArchived: true
    }
    ArchiveUpdate(obj).then((response) => {
      console.log(response)
      props.notesFromServer()
    }).catch((error) => {
      console.log(error)

    })

  }



  const updateNotes = () => {
    console.log(props.note.id)
    const data = new FormData()
    data.append('noteId', editNoteObj.id)
    data.append('title', editNoteObj.title)
    data.append('description', editNoteObj.description)
    
    console.log(editNoteObj.title, editNoteObj.description)


    updateNote(data).then((response) => {
      console.log(response)
      
      
       props.notesFromServer()

      handleClose()

    }).catch((error) => {
      console.log(error)
    })
    console.log(data)
    handleClose()

    
  }

const deleteNote=()=>{
  let obj={
    noteIdList : [props.note.id],
    isDeleted: true}
    setIsDeleted(true)
    console.log(obj)

    deleteData(obj).then((response) => {
      console.log(response)
      props.notesFromServer()
      

    }).catch((error) => {
      console.log(error)

    })

    
}

  return (
    <div className='takenotethree-Container' >

    
      
            <Card className={ClassNames.myNotes} sx={{ width: 250 }}>
              <CardContent style={{ backgroundColor: props.note.color }}>
                <Typography><InputBase name="title" placeholder="Title" fullWidth multiline className='text-area' value={props.note.title} onClick=
                  {handleOpen} /></Typography>
                <Typography><InputBase name="Description" placeholder="Description" fullWidth multiline className='text-area' value={props.note.description} onClick={handleOpen} /></Typography>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      <InputBase defaultValue={editNoteObj.title} onChange={editTitle} />
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <InputBase defaultValue={editNoteObj.description} onChange={editDesc} />
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2,display:"flex",justifyContent:"space-evenly"}}>
                      <AddAlertOutlinedIcon />
                      <PersonAddAltOutlinedIcon />
                      <SimplePopper />
                      <ImageOutlinedIcon />
                      <ArchiveOutlinedIcon />
                      <MoreVertOutlinedIcon />
                      <UndoOutlinedIcon />
                      <RedoOutlinedIcon />
                      <Button variant="outlined" onClick={updateNotes}>close</Button>
                    </Typography>
                  </Box>
                </Modal>
                <CardActions>
                  <AddAlertOutlinedIcon />
                  <PersonAddAltOutlinedIcon />
                  <SimplePopper action="update" id={props.note.id} notesFromServer={props.notesFromServer} />

                  <ImageOutlinedIcon />
                  <ArchiveOutlinedIcon onClick={updateArchive}  />
                  <DeleteOutlinedIcon onClick={deleteNote} notesFromServer={props.notesFromServer} />
                </CardActions>
              </CardContent>
            </Card>
    
    </div>



  )
}

export default TakeNoteThree