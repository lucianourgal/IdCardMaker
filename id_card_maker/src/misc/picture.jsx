import React from 'react';
import "./picturebox.css";

export default props => <div className="picturebox">{props.src}</div>
//<div className="picturebox">{props.src}</div>
//<div className="picturebox"><img src={require('../customimg/' + props.src + '.jpg')}/></div>