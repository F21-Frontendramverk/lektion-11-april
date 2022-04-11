import './Header.css';

import Cart from "./Cart";

function Header(props) {
    const { cartCounter } = props;
    
    return (
        <header className='header'>
            <Cart cartCounter={ cartCounter } />
        </header>
    )
}

export default Header;