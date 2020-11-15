import React from 'react';
import { Table } from 'react-bootstrap';
import './Service.css';

export default function Service({ category, description, duration, name, price }) {
    return (
        <Table>
            <tbody>
            <tr>
                <td className="ServiceName">{name}</td>
                <td>{duration}</td>
                <td>{price}</td>
            </tr>
            <tr>
                <td colSpan="3">{description}</td>
            </tr>
            </tbody>
        </Table>
    );
}