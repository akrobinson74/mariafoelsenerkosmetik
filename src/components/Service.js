import React from 'react';

export default function Service({ category, description, duration, name, price }) {
    return(
        <div>
            <h2>{name}</h2> <span>{duration}</span> <span>€ {price}</span>
            <p>{description}</p>
        </div>
    );
}