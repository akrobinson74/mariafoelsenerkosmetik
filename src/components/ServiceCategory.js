import React from 'react';
import Service from './Service';

export default function ServiceCategory({ category, services }) {
    return (
        <>
            <h2>{category.name}</h2>
            <p>{category.description}</p>
            {services.map(( service, i ) => (
                <Service {...service} />
            ))}
        </>
    );
}