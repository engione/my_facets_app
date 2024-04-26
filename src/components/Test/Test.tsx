import { useState } from 'react'
import { TestButton } from "./TestButton";
import './Test.scss';
import { Button } from '../Button/Button';

//Переменные временное решение, текст должен быть взят из БД.
const questone:string = 'Совершеннолетние и тренерский состав'
const questtwo:string = 'Несовершеннолетние и тренерский состав'
const questthree:string = 'И совершеннолетние, и несовершеннолетние, и тренерский состав'

const types = [questone, questtwo, questthree];

export const Test = () => {
    const [active, setActive] = useState(types[0]);
    return (
        
        <section className="test">
            <div className="container mx-auto test__container">
                <div className="test-info">
                    <h2>В поездке будут учавствовать</h2>
                    <p>Выберите один вариант ответа</p>
                </div>
                <div className='button-container'>
                    {types.map((type) => (
                        <TestButton
                            text={type}
                            isActive={active === type}
                            onClick={() => setActive(type)}
                        />
                    ))}
                <Button className="underline underline-offset-4" version="secondary">Далее</Button>
                </div>
            </div>
        </section>
    );
};
