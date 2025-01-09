import React from "react";
import "./Business.css";

function Business(props) {
    return (
        <div className="business">
            <div>
                <img src={props.business.imageSrc} alt={props.business.name} />
            </div>
            <div className="businessName">
                <p>{props.business.name}</p>
            </div>
            <div>
                <div className="leftAlign">
                    <p>{props.business.address}</p>
                    <p>{props.business.city}</p>
                    <p>{props.business.state} {props.business.zipCode}</p>
                </div>

                <div className="rightAlign">
                    <p>{props.business.category}</p>
                    <p>{props.business.rating}</p>
                    <p>{props.business.reviewCount}</p>
                </div>
            </div>
        </div>
    );
}

export default Business;