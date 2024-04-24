import "./AboutUs.scss"
export function AboutUs() {
    return (
        <section id="aboutUs" className="about-us">
            <div className="container about-us__container mx-auto">
                <h3>О сервисе:</h3>
                <div className="about-us__wrap-top">
                    <div className="about-us__card-first">
                        <img src="../src/assets/bicycle-img.png"/>
                    </div>
                    <div className="about-us__card-second">
                        <p>Наш сервис по спортивным поездкам предлагает уникальную возможность организовать исключительные спортивные приключения. Мы специализируемся на создании персонализированных маршрутов для любителей активного образа жизни, спортсменов и тех, кто стремится испытать адреналин и незабываемые эмоции.</p>
                    </div>
                </div>
                <div className="about-us__wrap-bottom">
                    <ul className="about-us__list">
                        <li className="about-us__item">
                            <div className="card-about-us bg-bright-yellow">
                                <span className="card-about-us__title">5+</span>
                                <span className="card-about-us__descr">Лет на рынке</span>
                            </div>
                        </li>
                        <li className="about-us__item">
                            <div className="card-about-us bg-light-blue">
                                <span className="card-about-us__title">1000+</span>
                                <span className="card-about-us__descr">Довольных пользователей</span>
                            </div>
                        </li>
                        <li className="about-us__item">
                            <div className="card-about-us bg-dark-blue">
                                <span className="card-about-us__title">5+</span>
                                <span className="card-about-us__descr">Инновационные технологии</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
