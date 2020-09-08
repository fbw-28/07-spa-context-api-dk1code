import React from 'react'
import MyContext from "./myContext"

export default function ContextContainer(props) {
    return (
        <MyContext.Provider value={{}}>
            {props.children}
        </MyContext.Provider>
    )
}
