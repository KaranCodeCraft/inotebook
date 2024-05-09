import React, { useState } from "react";
import NoteContext from './NoteContext';

const NoteState = (props) => {
    const initialnotes =
        [
            {
                "_id": "6637c28820465c8574a3f46c",
                "user": "6621fea04f2c12233b4544cf",
                "tittle": "this is the second tittle for the demo",
                "discription": "this is the second discription in the demmo entery",
                "tag": "general",
                "date": "2024-05-05T17:31:52.164Z",
                "__v": 0
            },
            {
                "_id": "6637c29320465c8574a3f46e",
                "user": "6621fea04f2c12233b4544cf",
                "tittle": "this is the fist tittle for the demo",
                "discription": "this is the frist discription in the demmo entery",
                "tag": "general",
                "date": "2024-05-05T17:32:03.325Z",
                "__v": 0
            }
        ]

        const [notes, setNotes] = useState(initialnotes)
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>)
}
export default NoteState