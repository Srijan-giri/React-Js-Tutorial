const id = 1;
const productName = "Product Apple Watch"
const rating = 5;

const product1 = {
    id,
    productName,
    rating
}


console.log(product1);

const product2 = {
    description: "Product 2 description",
    id,
    productName,
    rating
}

// const getProductTwoDescription = product2.description;

const { description } = product2;

console.log(description);

let array = [1, 2, 3, 4];

let [firstElement, secondElement, thirdElement] = array;

console.log(firstElement, secondElement, thirdElement);