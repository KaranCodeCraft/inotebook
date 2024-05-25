import React, { useContext, useEffect, useRef, useState } from "react";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import NoteContext from "../Context/NoteContext";
import { useNavigate } from "react-router-dom";
const Notes = () => {
  const Navigate = useNavigate()
  const context = useContext(NoteContext);
  const { notes, getNotes, editNote } = context;
  const [ note, setNote ]= useState({id: "", etitle: "", edescription: "", etag: "" });
  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes();
    }else{
      Navigate('/login')
    }
    // eslint-disable-next-line
  }, []);

  const modalToUpdate = (note) => {
    ref.current.click();
    setNote({id: note._id, etitle: note.title, edescription: note.description, etag: note.tag });
  };

  const ref = useRef(null);
  const refClose =useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    editNote(note.id,note.etitle, note.edescription, note.etag)
    refClose.current.click()
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNote />
      <button
        type="button"
        ref={ref}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    aria-describedby="emailHelp"
                    value={note.etitle}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button disabled={note.etitle.length<3|| note.edescription.length<5} type="button" className="btn btn-primary" onClick={handleClick}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <h2>Your Notes</h2>
        <div className="container">
          {notes.length === 0 && 'Please add Notes'}
        </div>
        {notes.map((note) => {
          return (
            <NoteItem
              data={note}
              key={note._id}
              modalToUpdate={modalToUpdate}
            />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
