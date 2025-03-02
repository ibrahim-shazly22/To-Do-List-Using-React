import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes,setNotes]=React.useState([]);
  function AddNote(newnote){
    setNotes(prevNotes=>{
      return[...prevNotes,newnote]
    }); 
  }

  function deleteItem(id){
    setNotes(prevnotes=>{
      return prevnotes.filter((noteitem,index)=>{
        return index!== id;

      })
    })

  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={AddNote} />
      {notes.map((noteitem,index)=>{
        return <Note
        key={index}
        id={index}
        onDelete={deleteItem}
        title={noteitem.title}
        content={noteitem.content}/>
      })}
      <Footer />  
    </div>
  );
}

export default App;
