import React, {useContext, useEffect} from 'react'
import NoteContext from '../Context/NoteContext'

export default function About() {
    const a = useContext(NoteContext)
    useEffect(()=>{
        a.update()
        // eslint-disable-next-line
    },[])
    return (
        <div>
            This is the About {a.state.name}
        </div>
    )
}
