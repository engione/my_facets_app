import React, { useState } from 'react'
import { TestButton } from "./TestButton";
import './TestButton.scss';


const types = ["Cash", "Credit Card", "Bitcoin"];

export const Test = () => {
    const [active, setActive] = useState(types[0]);
    return (
        <div className='button-container'>
            {types.map((type) => (
                <TestButton 
                    text={type} 
                    isActive={active === type} 
                    onClick={() => setActive(type)}
                />
            ))}
        </div>
    );
};
