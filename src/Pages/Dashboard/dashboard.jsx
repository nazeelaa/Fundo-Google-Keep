import React from 'react'
import '../Dashboard/dashboard.css';
import HeaderContainer from '../../Components/Header/header';
import TakenoteOne from '../../Components/takenoteone/takenoteOne'
import TakeNoteThree from '../../Components/takenoteThree/takeNoteThree'
import TakenoteTwo from '../../Components/Takenotetwo/takenoteTwo'
import {getNotes} from '../../Service/dataService'
import MiniDrawer from '../../Components/sidenav/sideNav';
import { Box,Grid } from '@mui/material';




function Dashboard() {

  
  const[switchTakeNote,setSwitchTakeNote]=React.useState(false)
  const[openNav,setOpenNav]=React.useState(false)
  const[filterArray,setFilterArray]=React.useState([])
  const[currentPage,setCurrentPage]=React.useState("notes")


  const listenTakenoteOne=(data)=>{
    if(data===true)
    {
      setSwitchTakeNote(true)
    }
    else
    {
      setSwitchTakeNote(false)
    }
  }

  const listenToSideNav=(value)=>{
    console.log(value)
    setCurrentPage(value)
   

  }
    const listenToHeader=(data)=>{
        console.log(data)
        setOpenNav(!openNav)
    }

  const notesFromServer=()=>{
    getNotes().then((response) => {
      
      
      let filters=[]
      if(currentPage==="notes")
      {  
        console.log("n")
        filters=response.data.data.data.filter(function (note){
            if(note.isArchived===false && note.isDeleted===false){
              return(note)
    
            }
           
          })
            
      }
      else if(currentPage==="archive"){
        console.log("a")
        filters=response.data.data.data.filter(function (note){
          if(note.isArchived===true && note.isDeleted===false){
            return(note)
  
          }
         
        })

      }
      else if(currentPage==="deleted")
      {
        console.log("d")
        filters=response.data.data.data.filter(function (note){
          if(note.isArchived===true || note.isDeleted===true){
            return(note)
  
          }
         
        })
      }
      setFilterArray(filters)
    }).catch((err)=> { console.log(err)})

  }
  console.log(filterArray)

  React.useEffect( () => {
    notesFromServer()

  },
 
 
   [currentPage])
 
  return (
  <div>
    <div><HeaderContainer listenToHeader= {listenToHeader} /></div>
   <div >{switchTakeNote ? <TakenoteTwo notesFromServer={notesFromServer} listenTakenoteOne={listenTakenoteOne} />: <TakenoteOne listenTakenoteOne={listenTakenoteOne}/>}</div> 
   <div><MiniDrawer openNav={openNav} listenToSideNav={listenToSideNav}/> </div>
    <Box className='getNotesServer'>
    <Grid container  columnSpacing={1} rowSpacing={2} >
    {filterArray.map((note) => (<Grid item xs={12} sm={6} md={3}><TakeNoteThree note={note} notesFromServer={notesFromServer} /></Grid>))}</Grid></Box>
  </div> 
  
  )
}

export default Dashboard 