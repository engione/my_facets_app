import "./ConstructorBlank.scss"

export function ConstructorBlank() {
    return (
        <div className="container mx-auto">
            <div className="constructor-wrapper">
                <div className="constructor ml-12 my-5">
                    <div className="flex flex-col gap-16">
                        <h2>Теперь конструктор построен для вас!</h2>
                        <p>Перейдите в конструктор и начните организовывать выезд четко и быстро!</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="btn__constructor border rounded-3xl px-12 py-2.5">Перейти в конструктор</button>
                        <img className="mr-28 mb-9" src="../src/assets/constructor-logo.svg" alt="Логотип Мои грани" />
                    </div>
                </div>
            </div>
        </div>
    );
}