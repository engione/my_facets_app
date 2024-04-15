import './people_card.scss'


export function people_card() {
	return (
		<div className ="card">
			  <img 
                src="4082cdf016615143921bfaa5964f79da.png" 
                className={`img`} 
            />

        <div className ="info">
            <p className ="name">Васильев Пётр Семёнович</p>
            <p className ="work">Медицинский работник</p>
            <p className ="cost">2500/день</p>
        </div>
		<button	className='btn'></button>
    </div>
	)
}
