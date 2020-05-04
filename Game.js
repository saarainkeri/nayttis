import React from 'react';
import Stats from './Stats';
import Yoda from './Yoda';
import Booster from './Booster';

class Game extends React.Component {

  constructor(props) {
        super(props);
     
        this.mouseClicked = this.mouseClicked.bind(this);
  }
      
  mouseClicked() {
        const clicks = this.props.clicks + 1;
        this.props.setClicks(clicks);
  } 
    
  render() {
    return (
      <>
        <div className="header">
          <h1>Hungry Baby Yoda</h1>
        </div>
        <div className="content content--justified">
          <Stats count={this.props.clicks} />
          <Yoda onClick={this.mouseClicked} />
          <Booster boost={0} />
        </div>  
       </>
    );
  }

}

export default Game;