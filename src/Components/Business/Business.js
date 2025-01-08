import React from "react";
import "./Business.css";

function Business() {
    let business = {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90
    };

    return (
        <div className="business">
            <div>
                <img src={business.imageSrc} alt={business.name} />
            </div>
            <div className="businessName">
                <p>{business.name}</p>
            </div>
            <div>
                <div className="leftAlign">
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state} {business.zipCode}</p>
                </div>

                <div className="rightAlign">
                    <p>{business.category}</p>
                    <p>{business.rating}</p>
                    <p>{business.reviewCount}</p>
                </div>
            </div>
        </div>
    );
}

export default Business;