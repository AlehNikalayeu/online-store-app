import React from 'react';
import storeItems from "../data/items.json";
import {Button, Stack} from "react-bootstrap";

const CartItems = ({id, quantity, cartItems, setCartItems}) => {

    const item = storeItems.find(item => item.id === id)
    if (item === null) return null

    // removeFromCart (filter)
    const removeFromCart = (id) => {
        const updateCart = cartItems.filter(item => item.id !== id)
        setCartItems(updateCart)
    }


    return (

        <Stack direction="horizontal" className="d-flex align-items-center">
            <img
                src={item.imgUrl}
                style={{width: "90px", height: "90px", objectFit: "cover"}}
                className="me-2"
            />

            <div>
                {/*// todo отступ от кнопки и цены*/}
                <div className="mb-2">
                    {item.name}{""}
                    {quantity > 1 && (
                        <span className="text=muted m-1" style={{fontSize: ".7rem"}}>
                            x{quantity}
                        </span>
                    )}
                </div>

                <div className="text-muted" style={{fontSize: ".8rem"}}>
                    {item.price}
                </div>

                <div>
                    {item.price * quantity}
                </div>
            </div>


            <Button variant="outline-danger"
                    size="sm"
                    onClick={() => removeFromCart(id)}
                    className="ms-auto"
            >
                &times;
            </Button>


        </Stack>
    );
};

export default CartItems;