import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const initialnotes = [];

  const [notes, setNotes] = useState(initialnotes);

  //   Get all notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzZjgzOTg4OTA5MjM2MTgxYWUxODE2In0sImlhdCI6MTcxNTQzOTc4MX0.JgHMNINtORlKESb27aa9NjKtI_eIckb2VLugzWZViYg",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  // Add Note
  const addNote = async (title, description, tag) => {
    // to do api call

    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzZjgzOTg4OTA5MjM2MTgxYWUxODE2In0sImlhdCI6MTcxNTQzOTc4MX0.JgHMNINtORlKESb27aa9NjKtI_eIckb2VLugzWZViYg",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    getNotes()
  };

  // Delete Note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzZjgzOTg4OTA5MjM2MTgxYWUxODE2In0sImlhdCI6MTcxNTQzOTc4MX0.JgHMNINtORlKESb27aa9NjKtI_eIckb2VLugzWZViYg",
      },
    });
    const json = await response.json();
    console.log(json)
    console.log(`deleted the note with the id ${id}`);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit Note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      meathod: "PUT",
      headers: {
        "content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzZjgzOTg4OTA5MjM2MTgxYWUxODE2In0sImlhdCI6MTcxNTQzOTc4MX0.JgHMNINtORlKESb27aa9NjKtI_eIckb2VLugzWZViYg",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.tittle = title;
        element.discription = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
