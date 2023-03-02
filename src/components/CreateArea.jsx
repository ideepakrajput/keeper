import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [note, setNote] = useState({ title: "", content: "" });
    const [isExpanded, setIsExpanded] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }
    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    function handleClick(){
        setIsExpanded(true);
    }
    return (
        <div>
            <form className="create-note">
                {isExpanded && <input name="title" placeholder="Title" value={note.title} onChange={handleChange} />}
                <textarea onClick={handleClick} name="content" placeholder="Take a note..." rows={isExpanded ?"3":"1"} value={note.content} onChange={handleChange}/>
                <Zoom in={isExpanded}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
