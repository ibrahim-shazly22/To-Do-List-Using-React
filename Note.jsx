import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  function HandleClick(){
    props.onDelete(props.id);
  }
  
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={HandleClick}>
        <DeleteIcon/>
      </button>
    </div>
  );
}

export default Note;
