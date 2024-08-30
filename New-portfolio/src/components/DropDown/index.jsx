import React, { useState } from 'react';



import { Container } from "./styles";

export function DropDown() {

    const [selectedOption, setSelectedOption] = useState('pt');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    }
    return(
        <Container>
            <div className="dropdown">
                <select value={selectedOption} onChange={handleChange}>
                    <option value="pt">PT-BR</option>
                    <option value="en">EN</option>
                </select>
            </div>
        </Container>
    );
};

