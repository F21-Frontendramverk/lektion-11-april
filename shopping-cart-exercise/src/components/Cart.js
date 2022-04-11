function Cart(props) {
    const { cartCounter } = props;

    return (
        <section>
            <a href="#">Cart</a>
            <span>{ cartCounter }</span>
        </section>
    )
}

export default Cart;