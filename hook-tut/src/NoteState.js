import React,{useState} from 'react'
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const [state,setState]=useState([
        {name:'Anand',age:'22'},
        {name:'Ankush',age:'21'},
        {name:'Anand Choubey',age:'20'}
    ])
  return (
    <NoteContext.Provider value={[state,setState]}>
    {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState