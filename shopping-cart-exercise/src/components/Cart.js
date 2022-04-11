import './Cart.css';

function Cart(props) {
    const { cartCounter } = props;

    return (
        <section>
            <a href="#">Cart</a>
            <span className='cart__counter'>{ cartCounter }</span>
        </section>
    )
}

export default Cart;