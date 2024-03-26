import './development.scss'

function Hero (){
    return(<div className="development">
        <div>
            <h1>Развитие тела и духа вместе с нами</h1>
            <div>
                <button className="white">Конструктор спортивных мероприятий</button>
                <button className="orange">Оставить заявку</button>
            </div>
        </div>
        <img src="./src/assets/football.png" alt="" />
    </div>)
}

export default Hero;