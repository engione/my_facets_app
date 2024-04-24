import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import { Nav } from "../Nav/Nav";
import "./Footer.scss";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__block footer__block_top">
        <div className="container mx-auto footer__container">
          <div className="footer__wrapper footer__wrapper_left">
            <Logo imgUrl="logo_name.svg" />
            <span className="footer__copy">&copy;&nbsp;2023 Мои грани</span>
            <div className="footer__contacts">
              <a href="mailto:p.razrab@moigrani.ru">p.razrab@moigrani.ru</a>
              <a href="tel:+74959681300">+7 (495) 968-13-00</a>
            </div>
          </div>
          <div className="footer__wrapper footer__wrapper_center">
            <h4 className="footer__question">
              Что-то не поняли и остались вопросы?
            </h4>
            <p className="footer__todo">
              Смело нажимайте на кнопку ниже и мы решим ваш вопрос
            </p>
            <Button version="secondary">Оставить заявку</Button>
          </div>
          <div className="footer__wrapper footer__wrapper_right">
            <div className="socials footer__socials">
              <ul className="socials__list">
                <li className="socials__item">
                  <a href="#" className="social-link">
                    <img src="../src/assets/vk.svg" alt="Вконтакте" />
                  </a>
                </li>
                <li className="socials__item">
                  <a href="#" className="social-link">
                    <img src="../src/assets/tg.svg" alt="Телеграм" />
                  </a>
                </li>
                <li className="socials__item">
                  <a href="#" className="social-link">
                    <img src="../src/assets/oc.svg" alt="Одноклассники" />
                  </a>
                </li>
              </ul>
              <Nav className={"nav__list_col"} v={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="footer__block footer__block_bottom">
        <div className="container mx-auto footer__container">
          <ul className="legal-info">
            <li className="legal-info__item">
              <a href="#" className="legal-info__link">
                Оферта
              </a>
            </li>
            <li className="legal-info__item">
              <a href="#" className="legal-info__link">
                Оплата
              </a>
            </li>
            <li className="legal-info__item">
              <a href="#" className="legal-info__link">
                Правила пользования платформой
              </a>
            </li>
            <li className="legal-info__item">
              <a href="#" className="legal-info__link">
                Политика конфиденциальности
              </a>
            </li>
          </ul>
          <address>
            <p>г.Москва, вн.тер.г. Городской округ Троицк, г. Троицк, ул. Новостройка, д. 27/18 , помещ. 9/2</p>
          </address>
        </div>
      </div>
    </footer>
  );
};
