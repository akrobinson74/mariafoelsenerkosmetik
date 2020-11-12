import React from 'react';
import './Intro.css';


export default function Intro({ headlines, keywords, proprietor }) {
    return (
        <>
        <div>
            <h2>{proprietor}</h2>
        </div>
        <div>
            {headlines.map((headline, i) => (
            <h1>{headline}</h1>
            ))}
        </div>
        <div>
            {keywords.map((keyword, i) => (
            <h3>{keyword}</h3>
            ))}
        </div>
        </>
    );
}