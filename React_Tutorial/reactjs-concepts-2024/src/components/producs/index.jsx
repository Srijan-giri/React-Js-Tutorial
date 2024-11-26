import ProductItem from "./components/product-item";





function ProductList(props) {
    console.log(props);
    const { name, city, dummyProductdata } = props;
    return (
        <div>
            <h3>ECommerce Project</h3>
            {/* <ProductItem /> */}
            <h4>Name is {name}, he/she is belongs to this city {city}</h4>

            <ul>
                {
                    dummyProductdata.map((item, index) => {
                        // return <li key={index}>{item}</li>
                        return <ProductItem key={index} item={item} />;
                    })
                }
            </ul>
        </div>
    )
}

export default ProductList;