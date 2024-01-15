import React from 'react';
import {Button, Card} from "react-bootstrap";

const StoreItem = ({item, cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity}) => {

    const {id, name, price, imgUrl} = item;

    // const quantity = 0;

    const cartItem = cartItems.find((cartItem) => cartItem.id === id)
    const quantity = cartItem ? cartItem.quantity : 0

    return (
        <Card style={{width: '20rem'}} className="mx-auto my-3">
            <Card.Img variant="top" src={imgUrl}
                      style={{objectFit: "contain", width: '20rem'}}
            />
            <Card.Body className="d-flex-column">
                <Card.Title className="d-flex justify-content-space-between align-items-baseline mb-4">
                    <span className="fs-4">{name}</span>
                    <span className="ms-auto fs-5 text-muted">{price}</span>
                </Card.Title>


                <div>

                    {quantity === 0 ? (

                        <Button className="w-100" variant="light " onClick={() => addToCart(item)}>Add to Cart</Button>

                    ) : (
                        <div className="d-flex align-items-center flex-column" style={{gap: ".5rem"}}>
                            <div className="d-flex align-items-center justify-content-center" style={{gap: ".5rem"}}>

                                <Button className variant="light" onClick={() => decreaseQuantity(item)}>-</Button>

                                <div>
                                    <span className="fs-3">{quantity}</span>
                                </div>

                                <Button className variant="light" onClick={() => increaseQuantity(item)}>+</Button>
                            </div>

                            <Button variant="secondary" onClick={() => removeFromCart(item)}>Remove</Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
};

export default StoreItem;