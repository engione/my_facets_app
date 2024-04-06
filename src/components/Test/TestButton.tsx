import { useState } from 'react'
import { TestButton } from "./Test";
import './TestButton.scss';

//Переменные временное решение, текст должен быть взят из БД.
const questone:string = 'Совершеннолетние и тренерский состав'
const questtwo:string = 'Несовершеннолетние и тренерский состав'
const questthree:string = 'И совершеннолетние, и несовершеннолетние, и тренерский состав'

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
