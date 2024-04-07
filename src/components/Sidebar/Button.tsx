import { Component } from 'react'
import { BsPerson } from "react-icons/bs";
import { PiHouseSimple, PiHandCoins } from "react-icons/pi";
import { MdOutlinePeople, MdOutlineInventory2 } from "react-icons/md";
import { LuWallet } from "react-icons/lu";
import { IoDocumentTextOutline, IoDocumentsOutline } from "react-icons/io5";
import { GrSchedules } from "react-icons/gr";
import { FaArrowRight } from "react-icons/fa";

type SidebarProps = {
    step: number
    name: string
    icon: any
}

interface SidebarState {
    sidebar: SidebarProps[]
    activeStep: null | number;
}

export default class Button extends Component<{}, SidebarState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            sidebar: [
                {
                    step: 1,
                    icon: BsPerson,
                    name: 'Шаг 1 - Анкета'
                },
                {
                    step: 2,
                    icon: PiHouseSimple,
                    name: 'Шаг 2 - Бронь площадки'
                },
                {
                    step: 3,
                    icon: PiHouseSimple,
                    name: 'Шаг 3 - логистика'
                },
                {
                    step: 4,
                    icon: GrSchedules,
                    name: 'Шаг 4 - Расписание'
                },
                {
                    step: 5,
                    icon: IoDocumentsOutline,
                    name: 'Шаг 5 - Документация'
                },
                {
                    step: 6,
                    icon: PiHandCoins,
                    name: 'Шаг 6 - Оплата'
                },
                {
                    step: 7,
                    icon: MdOutlineInventory2,
                    name: 'Шаг 7 - Инвентарь'
                },
                {
                    step: 8,
                    icon: MdOutlinePeople,
                    name: 'Шаг 8 - Турнирная сетка'
                },
                {
                    step: 9,
                    icon: IoDocumentTextOutline,
                    name: 'Шаг 9 - Исполнители'
                },
                {
                    step: 10,
                    icon: LuWallet,
                    name: 'Шаг 10 - Проведение выезда'
                },
                {
                    step: 11,
                    icon: LuWallet,
                    name: 'Шаг 11 - Награждение'
                },
                {
                    step: 12,
                    icon: LuWallet,
                    name: 'Шаг 12 - Отчет о проведение'
                },
            ],
            activeStep: null
        };
    }

    stepClick = (step: number) => {
        if(this.state.activeStep != step){
            this.setState({ activeStep: step });
        } else {
            this.setState({ activeStep: null });
        }
    }

    render() {
        return (
            <div className='sidebar'>
                {this.state.sidebar.map(el => (
                    <button
                        onClick={() => this.stepClick(el.step)}
                        className={`sidebar ${this.state.activeStep === el.step ? 'active' : ''}`}>
                        <span>{el.icon()}</span>
                        {el.name} 
                        <span className='arrow'><FaArrowRight /></span>
                    </button>
                ))}
            </div>
        );
    }
}