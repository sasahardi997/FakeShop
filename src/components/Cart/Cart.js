import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Modal from '../UI/Modal';

function Cart(props) {

    const cartItems = useSelector(state => state.product.cartItems);
    const totalAmount = useSelector(state => state.product.totalAmount);

    return (
        <Modal onClose={props.onClose}>

            {cartItems.map((cart) => {
                return(
                    <Row>
                        <Col md={9}>
                            <h6>{cart.title}</h6>
                            <p>${cart.price}</p>
                        </Col>
                        <Col md={3}>
                            <h4>x{cart.quantity}</h4>
                        </Col>
                        <hr 
                            style={{
                                height: 5
                      }}
                    />
                    </Row>
                    
                )
            })}

            <h5 style={{marginTop: '40px'}}>Total Amount: ${totalAmount.toFixed(2)}</h5>

            <Button style={{float: 'right'}} variant="primary" onClick={props.onClose}>Close</Button>
        </Modal>
    );
}

export default Cart;