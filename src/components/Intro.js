import React from 'react';
import uuid from 'react-uuid';
import './Intro.css';


export default function Intro({ headlines, keywords, proprietor }) {
    return (
        <div key={uuid()}>
            <div>
                <h2 key={uuid()}>{proprietor}</h2>
            </div>
            <div>
                {headlines.map((headline) => (
                    <h1 key={uuid()}>{headline}</h1>
                ))}
            </div>
            <div>
                {keywords.map((keyword) => (
                    <h3 key={uuid()}>{keyword}</h3>
                ))}
            </div>
        </div>
    );
}