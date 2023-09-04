import React ,{ useContext } from "react"
import { TextContext } from "../../contexts/TextContextProvider"

const Child:React.FC | null = () => {
    const context = useContext(TextContext)
    if(!context) return null 
    const {text} = context
    return <h2>{text}</h2>
}

export default Child