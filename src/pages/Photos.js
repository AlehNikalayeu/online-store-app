import React, {useContext} from 'react';
import storeItems from '../data/items.json'
import StoreItem from "../components/StoreItem";
import {Col, Row} from "react-bootstrap";
import {CartContext} from "../context/CartContext";

const Photos = ({searchText}) => {

    const {cartItems, setCartItems} = useContext(CartContext)

    // функция добавления в корзину
    const addToCart = (item) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id)

        if (existingItem) {
            const updatedCartItems = cartItems.map((cartItem) =>
                cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
            );
            setCartItems(updatedCartItems)
        } else {
            setCartItems([...cartItems, {...item, quantity: 1}])
        }
    }

    // функция удаления с корзины
    const removeFromCart = (item) => {
        const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id)
        setCartItems(updatedCartItems)
    }

    // минус
    const decreaseQuantity = (item) => {
        const updateCardQuantity = cartItems.map((cartItem) =>
            cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
        )
        setCartItems(updateCardQuantity)
    }

    // плюс
    const increaseQuantity = (item) => {
        const updateCartQuantity = cartItems.map((cartItem) =>
            cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )
        setCartItems(updateCartQuantity)
    }

    // фильтрация

    const filteredItems = storeItems.filter(item => {
        return item.name.toLowerCase().includes(searchText.toLowerCase())
    })


    return (
        <div>
            <h1>Photos page</h1>

            <Row>
                {filteredItems.map((item) => (
                    <Col key={item.id}>
                        <StoreItem
                            item={item}
                            cartItems={cartItems}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                            decreaseQuantity={decreaseQuantity}
                            increaseQuantity={increaseQuantity}
                        />
                    </Col>
                ))}
            </Row>

        </div>
    );
};

export default Photos;