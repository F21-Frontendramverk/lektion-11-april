import Cart from "./Cart";

function Header(props) {
    const { cartCounter } = props;
    
    return (
        <header>
            <Cart cartCounter={ cartCounter } />
        </header>
    )
}

export default Header;