import React from 'react';
import '../takenoteone/takenoteOne.css';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';

const TakenoteOne=(props)=>{

    const onsubmit=()=>{
            props.listenTakenoteOne(true)
    }
    return(

        <div className='takeNote' onClick={onsubmit}>
           
        <div className='note'>Take a note...</div>
                <div className='bar-icons'>
                    <div><CheckBoxOutlinedIcon htmlColor="grey" /></div>
                    <div><BrushOutlinedIcon htmlColor="grey" /></div>
                    <div><InsertPhotoOutlinedIcon htmlColor="grey" /></div>
                </div>
        </div>
        
    )

}
export default TakenoteOne;