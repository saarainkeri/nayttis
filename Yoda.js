import React, {useState} from 'react';
import yoda from './images/yoda.png';

function Yoda(props) {
    const [pressed, setPressed] = useState(false);
    const classValue = pressed ? "yoda__img yoda__img--pressed" : "yoda__img";
    return  (
      <div className="yoda">
        <img 
          src={yoda} 
          alt="" 
          className={classValue} 
          onClick={props.onClick}
          onPointerDown={() => setPressed(true)}
          onPointerUp={() => setPressed(false)}
       />
     </div>
    );
  }

  export default Yoda;