import { useState } from "react";
import "./Option.scss"

let isChosed = false;
export const Option =()=> {
  const [borderColor,setBorderColor] = useState('#6BD7DB');
  const [image,setImage]= useState('src/components/Option/imgs/ei_check.png')
  function optionClick() {
    if (isChosed)
    {
      isChosed=false;
      setBorderColor('#6BD7DB');
      setImage('src/components/Option/imgs/ei_check.png');
    }
    else 
    {
      isChosed=true;
      setBorderColor('orange');
      setImage('src/components/Option/imgs/ei_checked.png');
    }
  }
  return (
        <button className="option" onClick={optionClick} style={{borderColor: borderColor}}>
          <img className="option_img" src={image}></img>
          <p className="option_text">Апартаменты</p>
        </button>
  );
}