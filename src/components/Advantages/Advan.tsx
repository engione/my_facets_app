import { useState } from "react";
import "./Advan.scss";
export const Advantages =()=>
{
    return (
        <form className="advantages">
            <div className="container">
            <p id="title">ПРЕИМУЩЕСТВА:</p>
            <div id="square">
                <div id="firstLine">
                    <div className="advantage">
                        <p className="header">Лучшие цены</p>
                        <p className="text">Конструктор спортивных поездок
                        обеспечивает лучшие цены благодаря прямому
                        доступу к поставщикам услуг, регулярным
                        акциям и прозрачной ценовой политике</p>
                    </div>
                    <div className="advantage">
                        <p className="header">Интерактивные 
                        карты и маршруты</p>
                        <p className="text">Каждый может ознакомиться с интерактивными 
                        картами и подробными описаниями 
                        маршрутов</p>
                    </div>
                </div>
                <div id="secondLine">
                <div className="advantage">
                        <p className="header">Эксклюзивные 
                        предложения для 
                        постоянных клиентов</p>
                        <p className="text">Конструктор спортивных поездок
                         обеспечивает лучшие цены благодаря прямому 
                         доступу к поставщикам услуг, регулярным 
                         акциям и прозрачной ценовой политике.</p>
                    </div>
                    
                    <div className="advantage">
                        <p className="header">Персонализированный 
                        подход</p>
                        <p className="text">Каждый может создать индивидуальный 
                        маршрут, адаптированный под свои 
                        потребности и предпочтения</p>
                    </div>
                </div>
                
                
            </div>
            </div>
        </form>
    );
}