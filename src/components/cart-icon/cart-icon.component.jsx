import { useSelector, useDispatch } from 'react-redux';
import {selectCartCount, selectIsCartOpen} from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.ation';
import {CartIconContainer, ShoppingIcon, ItemCount} from './cart-icon.styles';

const CartIcon = () => {

    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);
    const dispatch = useDispatch();

    const toggleIsCartOpen =  ()=> dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>

    )
}

export default CartIcon;