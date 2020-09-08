import React, { useContext} from 'react'
import MyContext from "./Context/myContext"

export default function B() {
    const {x, y, setY} = useContext(MyContext)
    return (
        <div>
            <p>B, x = {x}</p>
            <button onClick={() => setY(y+1)}>Increment Y</button>
        </div>
    )
}