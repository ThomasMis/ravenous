import React from "react";
import Business from "../Business/Business.js";
import "./BusinessList.css";

function BusinessList(props) {
    return (
        <div className="businessList">
            {props.businesses.map(business => <Business business={business}/>)}
        </div>
    );
}

export default BusinessList;