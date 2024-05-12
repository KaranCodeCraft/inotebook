import React, { useContext } from 'react'
import NoteContext from '../Context/NoteContext'

const NoteItem = (props) => {
    const { data, modalToUpdate } = props
    const context = useContext(NoteContext)
    const {deleteNote}= context
    return (
        <div className="card col-md-3 m-2" >
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <i className="fa-regular fa-trash-can mx-2" onClick={()=>{deleteNote(data._id)}}></i>
                <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{modalToUpdate(data)}}></i>
            </div>
        </div>
    )
}

export default NoteItem