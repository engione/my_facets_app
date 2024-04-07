import Button from './Button';
import './sidebar.scss'
import { RxExit } from "react-icons/rx";

export default function Sidebar() {
    return (
        <aside>
            <div className='logo'>
                <img src="src\components\Sidebar\img\Frame 40.svg" alt="logo" />
                <h1>МОИ ГРАНИ</h1>
            </div>
            <h2>Конструктор спортивных поездок</h2>
            <div className='sidebar'>
                <Button />
            </div>
            <div className='exit'>
                <span><RxExit className='iconExit'/></span>
                <a href="#">Выйти</a>
            </div>
        </aside>
    );
}