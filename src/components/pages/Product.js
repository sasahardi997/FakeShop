import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row, Button, Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { addToCart } from '../../store/shop-actions';

function Product(props) {

    const [product, setProduct] = useState({
        id: "",
        title: "",
        price: "",
        category: "",
        description: "",
        image: ""
    });

    const [spinner, setSpinner] = useState(true);

    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const id = params.id;
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                setProduct(res.data);
                setSpinner(false);
            }).catch(error => {
                console.log(error);
            })
        
    },[params.id]);

    const goToAdd = () => {
        dispatch(addToCart(product));
    }

    return (
        <div>
            {!spinner && 
                 <Row style={{marginTop: '70px'}}>
            
                 <Col md={6}>
                     <img style={{width: '80%'}} src={product.image} alt="shop-pic"/>
                 </Col>
                 <Col md={6}>
                     <h3>{product.title}</h3>
                     <p>${product.price}</p>
                     <p >{product.category}</p>
                     <p>{product.description}</p>
                     <Button variant="primary" onClick={() => goToAdd()}>Add to Cart</Button>
                 </Col>
             </Row>
            }

            <div style={{marginTop: '25%', justifyContent: 'center', display: 'flex'}}>
                 {spinner && <Spinner animation="border" variant="primary" />}
           </div>
           
        </div>
    );
}

export default Product;