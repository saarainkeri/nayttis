import React from 'react';
import { Link } from 'react-router-dom';

import iconyoda from './images/iconyoda.png'; 
import iconfood from './images/iconfood.png';  
import iconsettings from './images/iconsettings.png';

function Menu(props) {
    return (
     <div className="menu">
       <Link to ="/"><div><img src={iconyoda} alt="game" /></div></Link>
       <Link to ="/coupons"><div><img src={iconfood} alt="coupons" /><span className="badge">{props.claimableCoupons}</span></div></Link>
       <Link to ="/profile"><div><img src={iconsettings} alt="profile" /></div></Link>
     </div>
    );
  }

  export default Menu;