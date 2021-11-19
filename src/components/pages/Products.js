import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Filters from './Filters';

function Products(props) {

    const products = useSelector(state => state.product.products);
    const navigate = useNavigate();

    return (
        <div style={{marginTop: '50px'}} >
           
            <Container>
                <Row>
                    <Col md={3}>
                      <Filters />
                    </Col>
                    <Col md={9} >
                        <Row>
                            {products.map((p) => {
                                return(
                                    <Col style={{justifyContent:'center', display: 'flex'}} key={p.id} md={6}>
                                        <Card style={{ width: '60%' }}>
                                            <Card.Img variant="top" width="30%" src={p.image} />
                                            <Card.Body>
                                                <Card.Subtitle>{p.title}</Card.Subtitle>
                                                <Button style={{marginTop: '20px'}} variant="primary" onClick={() => navigate("/products/" + p.id)}>See Product</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Col>
                 </Row>
            </Container>   
        </div>
    );
}

export default Products;