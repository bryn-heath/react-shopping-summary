import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';

export default class Fees extends Component {
    render() {
        return (
            <Row className="shw-grid">
                <Col md={6}>Est. Fees (Base on 9409) </Col>
                <Col md={6}>{`£${this.props.taxes}`}</Col>
            </Row>
        );
    }
}