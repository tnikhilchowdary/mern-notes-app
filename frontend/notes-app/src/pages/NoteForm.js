import React, { useEffect, useState} from "react";
import axios from "axios";

const NoteForm = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/notes")
        .then((res)  => {
            setNotes(res.data);
        })
        .catch((err) => {
            console.log("Error Fetching Notes", err);
        });
    }, [])
    return(
        <div>
            <ul>
                {notes.map((note) => (
                    <li key={note._id}>
                        <strong>{note.title}</strong> - {note.content}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NoteForm;