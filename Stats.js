import React from 'react';

function Stats(props) {
    return(
      <div className="stats">
        <div className="stats__title">Meals</div>
        <div className="stats__count">{props.count}</div>
      </div>
    );
  }

  export default Stats;