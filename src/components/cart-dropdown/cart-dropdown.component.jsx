import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useNavigate } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import {CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

const CartDropdown = () => {

    const cartItems  = useSelector(selectCartItems);
    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <CartDropdownContainer>
            <CartItems >
                {
                    cartItems.length  
                    ? cartItems.map((item) => {
                    return (<CartItem key={item.id} cartItem={item} />)
                    })
                    : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )
            }
            </CartItems>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={goToCheckoutHandler}>go to checkout</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;