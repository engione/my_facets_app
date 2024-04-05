import React, { useState } from 'react'
import { TestButton } from "./Test";
import './TestButton.scss';

let questone:string = 'Совершеннолетние и тренерский состав'
let questtwo:string = 'Несовершеннолетние и тренерский состав'
let questthree:string = 'И совершеннолетние, и несовершеннолетние, и тренерский состав'

const types = [questone, questtwo, questthree];

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
