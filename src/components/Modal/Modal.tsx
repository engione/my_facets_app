type MProps = {
    hype: () => void
}

export default function Modal(props: MProps) {
    return (
        <div className='modal'>
            <div>
                <header><span>Комната:</span> название или цифра</header>
                <b>Выберите:</b>
                <div>
                    <button onClick={props.hype} className='bBoy'>Мальчики</button>
                    <button onClick={props.hype} className='bGirl'>Девочки</button>
                    <button onClick={props.hype} className='bCancel'>Отменить</button>
                    <button onClick={props.hype} className='bReady'>Готово</button>
                </div>
            </div>
        </div>
    )
}