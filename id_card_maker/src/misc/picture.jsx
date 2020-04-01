import React from 'react';
import "./picturebox.css";

 const PictureBox = (props) => {

    let image;

    try {
        image = <img src={require('../customimg/' + props.src + '.jpg')}
            alt={"Picture of " + props.src} />;
    } catch {
        image = "'" + props.src + ".jpg' not found";
        console.log(image + ". Perhaps too large?");
    }

    return (
        <div className="picturebox">
            {image}
        </div>
    )
}

export default PictureBox;