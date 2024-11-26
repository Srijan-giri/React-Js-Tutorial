let getListOfProductElement = document.querySelector('.list_of_products');

function renderProducts(products) {
    getListOfProductElement.innerHTML = products.map((singleProduct) => { return `<p>${singleProduct.title}</p>`; }).join(" ");
}
async function fetchListOfProducts() {
    try {
        const apiResponse = await fetch('https://dummyjson.com/products', { method: 'GET' });

        const result = await apiResponse.json();

        console.log(result);

        if (result.products.length > 0) renderProducts(result.products);
    }
    catch (err) {
        console.log(err);
    }
}

fetchListOfProducts();