import * as React from 'react';
import Box from '@mui/material/Box';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import Popper from '@mui/material/Popper';
import { colorUpdateData } from '../../Service/dataService'

const colors = ['#00ffff', '#fa8072', '#5f9ea0', '#40e0d0', '#d2b48c', '#ffff00', '#b19cd9', '#90ee90']


export default function SimplePopper(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const takeColor = (e) => {

    if (props.action === 'create') 
    {
      props.listenToPopper(e.target.id)
    }
    else if (props.action === 'update') {
      let data = {
        noteIdList: [props.id],
        color: e.target.id
      }
      console.log(data)
      colorUpdateData(data).then((response) => {
        props.notesFromServer() 
        console.log(response)
      }).catch((error) => {
        console.log(error)

      })
    }
  }

  return (
    <div>
      {/* <button aria-describedby={id} type="button" onClick={handleClick} > */}
        <ColorLensOutlinedIcon  aria-describedby={id} type="button" onClick={handleClick} />
      {/* </button> */}
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{
          border: '1px solid lightgrey', p: 1, borderRadius: '8px', bgcolor: 'background.paper', display: "flex", flexDirection: "row",
          justifyContent: "space-evenly",
        }}>
          {colors.map((col) => (<div key={col} onClick={takeColor} id={col} style={{ backgroundColor: col, width: "30px", height: "30px", borderRadius: "50%" }}></div>))}
        </Box>
      </Popper>
    </div>
  );
}