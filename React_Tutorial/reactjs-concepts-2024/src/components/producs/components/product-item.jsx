
function ButtonComponent() {
    return (<button>Click</button>);
}

function ProductItem(props) {
    const { key, item } = props;

    return (
        <div key={key}>
            <p>{item}</p>
            <ButtonComponent />
        </div>
    )
}

export default ProductItem;