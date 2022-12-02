import React, { useState } from "react";
import PortContext from "../PortContext";

const PortContextProvider = ({ children }) => {

    const [background, setBackground] = useState('pink')
    const changeBackground = () => background === 'pink' ? setBackground('blue') : setBackground('pink')

    const [btn, setBtn] = useState('btn-pink')
    const changeBtn = () => btn === 'btn-pink' ? setBtn('btn-blue') : setBtn('btn-pink')
    
    return (<PortContext.Provider value={{ background, setBackground, changeBackground, btn, setBtn, changeBtn}}>{children}</PortContext.Provider>)
}

export default PortContextProvider