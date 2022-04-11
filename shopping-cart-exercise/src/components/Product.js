function Product(props) {
    const { productInfo } = props;

    return (
        <article>
            <h2>{ productInfo.titel }</h2>
            <h3>{ productInfo.author }</h3>
            <p>{ productInfo.text }</p>
            <button>Add to cart</button>
        </article>
    )
}

export default Product;