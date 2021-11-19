import axios from "axios"
import { Alert } from "react-bootstrap";
import { productActions } from "./shop-slice";

export const getAllProducts = () => {
    return (dispatch) => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => {
                dispatch(productActions.replaceProducts(res.data))
            }).catch(error => {
                console.log(error);
                Alert("Error fetching data")
         }) ;
     }
}

export const getProductByCategory = (category) => {
    return (dispatch) => {
        axios.get("https://fakestoreapi.com/products/category/" + category)
            .then(res => {
                dispatch(productActions.replaceProducts(res.data))
            }).catch(error => {
                console.log(error);
                Alert("Error fetching data")
         }) ;
     }
}

export const getCategories = () => {
    return (dispatch) => {
        axios.get("https://fakestoreapi.com/products/categories" )
            .then(res => {
                dispatch(productActions.replaceCategories(res.data))
            }).catch(error => {
                console.log(error);
                Alert("Error fetching data")
            }) ;
    }
}

export const addToCart = (product) => {
    return (dispatch) => {
        product['quantity'] = 1;
        dispatch(productActions.addToCartItems({item: {
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
            category: product.category,
            quantity: 1
        }}));
    }
}