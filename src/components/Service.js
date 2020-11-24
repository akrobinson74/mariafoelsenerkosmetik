import React from 'react';
import { Table } from 'react-bootstrap';
import './Service.css';

export default function Service({ category, description, duration, name, price }) {
    return (
        <Table className="service-table">
            <tbody>
            <tr>
                <td className="ServiceName">{name}</td>
                <td className="Duration">{duration}</td>
                <td className="Price">{price === null ? "" : price}</td>
            </tr>
            <tr>
                <td colSpan="3">{description}</td>
            </tr>
            </tbody>
        </Table>
    );
}