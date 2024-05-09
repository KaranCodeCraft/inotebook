import React from 'react'

const NoteItem = (props) => {
    const { data } = props
    return (
        <div className="card col-md-3 mx-2" >
            <div className="card-body">
                <h5 className="card-title">{data.tittle}</h5>
                <p className="card-text">{data.discription}</p>
                <i className="fa-regular fa-trash-can mx-2"></i>
                <i className="fa-regular fa-pen-to-square mx-2"></i>
            </div>
        </div>
    )
}

export default NoteItem