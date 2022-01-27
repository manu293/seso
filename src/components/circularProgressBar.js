// imports
import React from "react";

const CircularProgressBar = (props) => {

    let outerCircle;
    let innerCircle;

    switch(props.color) {
        case "yellow":
            outerCircle = "yellowCircleProgress";
            innerCircle = "yellowBackground";
            break;

        case "red":
            outerCircle = "redCircleProgress";
            innerCircle = "redBackground";
            break;

        case "green":
            outerCircle = "greenCircleProgress";
            innerCircle = "greenBackground";
            break;

        default:
            outerCircle = "yellowCircleProgress";
            innerCircle = "yellowBackground";
            break;
    }

    return (
        <div className="progressCircle">
            <div className="progressCircleText">{props.number}</div>
            <svg>
                <circle className={innerCircle} cx="57" cy="57" r="52" />
                <circle className={outerCircle} cx="57" cy="57" r="52" />
            </svg>
        </div>
    )

}

export default CircularProgressBar;