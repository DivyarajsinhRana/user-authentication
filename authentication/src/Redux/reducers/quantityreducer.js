const initialstate  =[ {
    name : "",
    image : "",
    material : "",
    price : "",
    stock : "",
    createdAt : "",
    quantity:0
}];
const quantityreducer = (state = initialstate, action) => {
    if (action.type === "IncreaseQuantity") {
        console.log(state)
        console.log(action.payload);
        console.log(action.name)
        state = [...state, action.payload]
        const itemname = state.map(item=> item.name)   
        console.log(itemname);
        console.log("quaintity>>>>",state);
        return state
    }
    else if (action.type === "DecreaseQuantity") {
        console.log(state);
        state = state.slice(1, action.payload);
        console.log(state);
        return state
    }
    else {
        return state
    }
}
export default quantityreducer