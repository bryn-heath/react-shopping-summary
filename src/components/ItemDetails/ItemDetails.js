import React, { Component } from 'react'
import { Button, Collapse, Well, Media, Row, Col, Container} from 'react-bootstrap';


export default class ItemDetails extends Component {

    constructor(props){
        super(props);
        this.state={
            open: false
        }
    }

    render() {
        return (
            <div>
                <Button
                className="item-details-button"
                bsStyle="link"
                variant="outline-secondary"
                onClick={ () => this.setState({open: !this.state.open}) }
                >
                    {this.state.open === false ? "See" : "Hide"} item details
                    {this.state.open === false ? " +" : " -"}
                </Button>

                <Collapse in={this.state.open}>
                    <div>
                           
                    <Media>
                                <Media.Body>
                                    <img 
                                    width={100} 
                                    height={100} 
                                    alt="thumbnail" 
                                    src="https://digitalcontent.api.tesco.com/v2/media/ghs/aefeb25d-a819-4378-8a01-8f3a62b92424/snapshotimagehandler_512412760.jpeg"/>
                                </Media.Body>
                                    <Media.Body>
                                        <p>Maximum Taste, no sugar - The long lasting hit of caramel and vanilla and the intense taste of a regular Pepsi all with no sugar
                                        </p>
                                        <Row className="show-grid">
                                            <Col ms={6}>
                                                <strong> {`£${this.props.price}`} </strong>
                                                <br />
                                                <strong className="price-strike"> {`£${this.props.price}`} </strong>
                                            </Col>
                                            <Col ms={6}>
                                                Qty: 1
                                            </Col>
                                        </Row>
                                    </Media.Body>
                            </Media>
                       
                    </div>
                </Collapse>
            </div>
        )
    }




}