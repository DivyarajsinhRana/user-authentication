import { useState,useEffect } from "react";
import { Drawer } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { DecreaseQuantity, IncreaseQuantity, removecart, stockDec, stockInc } from "../../Components/Auth/_Redux/authaction";
import { AddOutlined, AddShoppingCart, Remove, RemoveCircle, RemoveCircleOutline, RemoveOutlined } from '@material-ui/icons';

const Cart = () => {
    //functions for drawer
    const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // geting carted item
  const dispatch = useDispatch()
  const cartitem = useSelector(state => state.cart);
  const quantity = useSelector(state => state.quantity);
  const [amount, setAmount] = useState(0);
  const price = quantity.map((item) => item.price = parseFloat(item.price));
  const pricerreducer = (previousValue, currentValue) => previousValue + currentValue
    const totalamount = price.reduce(pricerreducer, 0)
    const total = () => {
        if (quantity.length && cartitem.length === 0) {
            setAmount(0)
        }
        else {
            setAmount(totalamount);
        }
    }
    useEffect(() => {
        total();
    }, [quantity])
    const handleInc = (item) => {
        dispatch(IncreaseQuantity(item))
        dispatch(stockDec(item))
    }
    const handleDec = (quantity) => {
        dispatch(DecreaseQuantity(quantity.length))
        // console.log(quantity);
        dispatch(stockInc(quantity));
    }
    const handleremove = (item) => {
        dispatch(removecart(item.name))
        dispatch(stockInc())
    }
    return (
        <div>
            <button
                className="btn btn-outline-light text-dark  mx-3"
                onClick={handleOpen}
            >
                <AddShoppingCart />
                <span>
                    <strong>{cartitem.length}</strong>
                </span>
            </button>
            
            <Drawer
                open={open}
                onClose={handleClose}
                anchor="right"
                className="cartDrawer"
                variant="temporary"
            >
                <h2>You have {cartitem.length} item in yout cart</h2>
                <div>
                {
                        cartitem && cartitem.map((item, index) => {
                            return (
                                <div className="card mx-auto" style={{ width: "18rem" }} key={index}>
                                    <img className="card-img-top" src={item.image} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title"><strong>Name</strong>:{item.name}</h5>
                                        <p className="card-text"><strong>Material</strong>:{item.material}</p>
                                        <p className="card-text"><strong>Price</strong>: {item.price}</p>
                                        <p className="card-text"><strong>Stock</strong>:{item.stock}</p>
                                        <p className="card-text"><strong>createdAt</strong>:{item.createdAt}</p>
                                        <button className='btn btn-danger' onClick={() => handleremove(item)}><RemoveCircle />Remove</button>
                                    </div>
                                    <div className='mx-auto'>
                                        <span onClick={() => handleDec(item)}><RemoveOutlined /></span>
                                        <span className='mx-2'>Quantity:{quantity.length}</span>
                                        <span onClick={() => handleInc(item)} ><AddOutlined /></span>
                                    </div>
                                    <div>
                                        <p className="card-text"><strong>Amount</strong>: {amount}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div>{
                        cartitem.length === 0 ? null :
                            <p><strong>Total:</strong>{amount}</p>
                    }

                    </div>
            </Drawer>
        </div>
    )
}

export default Cart
