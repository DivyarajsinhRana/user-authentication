import axios from 'axios'
import { GET_ROBOTS } from "./authcrud"

export const getrobots = (robots) => {
    return ({
        type: "getrobots",
        payload: robots
    })
}
export const addtocart = (item) => {
    return (
        {
            type: "addtocart",
            payload: item
        }
    )
}
export const removecart = (name) => {
    return {
        type: 'removecart',
        payload: name
    }
}
export const IncreaseQuantity = (item,itemName) => {
    console.log("increased quantity>>>", item)
    console.log("increased quantity>>>", itemName)
    return {
        type: "IncreaseQuantity",
        payload: item,
        name : itemName
    }
}
export const DecreaseQuantity = (end) => {
    return {
        type: "DecreaseQuantity",
        payload: end
    }
}
export const stockInc = (robot) => {
    return {
        type: "stockincrease",
        payload: [robot]
    }
}
export const stockDec = (robot) => {
    return {
        type: "stockdecrease",
        payload: [robot]
    }
}
export const getAllRobots = () => {
    return (dispatch) => {
        axios.get(GET_ROBOTS).then((res) => {
            // console.log("data>>>",res.data);
            const robot = res.data
            dispatch(getrobots(robot));
            return res.data
        }).catch(error => error.message);
    }
}   