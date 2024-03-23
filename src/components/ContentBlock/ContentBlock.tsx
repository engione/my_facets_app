import { Button } from "../Button/Button";
import "./ContentBlock.scss"


export function ContentBlock() {
    return (
        <section className="start-section">
            <div className="container mx-auto">
                <div className="content-block">
                    <h2>Развитие тела и духа вместе с нами</h2>
                    <div className="btn-wrap">
                        <Button>Конструктор спортивных мероприятий</Button>
                        <Button>Оставить заявку</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
