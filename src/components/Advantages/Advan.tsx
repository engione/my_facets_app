import "./Advan.scss";

export const Advantages = () => {
  return (
    <section className="advantages">
        <div className="container mx-auto advantages__container">
            <h2 className="advantages__title">Преимущества:</h2>
            <ul className="advantages__list">
                <li className="advantages__item">
                    <div className="card-advantages">
                        <h3 className="card-advantages__title">Лучшие цены</h3>
                        <p className="card-advantages__descr">Конструктор спортивных поездок обеспечивает лучшие цены благодаря прямому доступу к поставщикам услуг, регулярным акциям и прозрачной ценовой политике.</p>
                    </div>
                </li>
                <li className="advantages__item">
                    <div className="card-advantages">
                        <h3 className="card-advantages__title">Эксклюзивные предложения</h3>
                        <p className="card-advantages__descr">Конструктор спортивных поездок обеспечивает лучшие цены благодаря прямому доступу к поставщикам услуг, регулярным акциям и прозрачной ценовой политике.</p>
                    </div>
                </li>
                <li className="advantages__item">
                    <div className="card-advantages">
                        <h3 className="card-advantages__title">Интерактивные карты и маршруты</h3>
                        <p className="card-advantages__descr">Каждый может ознакомиться с интерактивными картами и подробными описаниями маршрутов</p>
                    </div>
                </li>
                <li className="advantages__item">
                    <div className="card-advantages">
                        <h3 className="card-advantages__title">Персонализированный подход</h3>
                        <p className="card-advantages__descr">Каждый может создать индивидуальный маршрут, адаптированный под свои потребности и предпочтения</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
};
