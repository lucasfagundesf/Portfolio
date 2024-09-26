import React, { useState} from 'react';
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { Container } from './styles';

export function DarkMode() {
    const [isDark, setIsDark] = useState(false);

    return (
        <Container>
            <div className="darkmode">
                <button 
                    className={`btn ${isDark ? "toggled" : ""}`} 
                    onClick={() => setIsDark(!isDark)}
                >
                    <IoSunnyOutline className={`sun ${isDark ? "toggled" : ""}`}/>
                    <FaRegMoon className= {`moon ${isDark ? "toggled" : ""}`} />
                </button>
            </div>
        </Container>
    )
}