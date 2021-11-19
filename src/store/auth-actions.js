import axios from "axios"
import { authActions } from "./auth-slice"


export const login = (username, password) => {
    let user = {
        username: username,
        password: password
    }
    return (dispatch) => {
        axios.post("https://fakestoreapi.com/auth/login", user)
            .then(res => {
            dispatch(authActions.login({user: user}))
            window.localStorage.setItem('token', res.data);
            window.location.replace('/admin-panel')
        }).catch(error => {
            console.log(error);
            alert("Wrong password or username.")
        })
    }
}