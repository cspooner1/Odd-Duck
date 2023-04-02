var numberOfVotes = 0;

function Product(productName, imageFilePath) {
    this.productName = productName;
    this.imageFilePath = imageFilePath;
    this.timesShown = 0;
    this.clicks = 0;
}
let bubbleGum = new Product("Bubble Gum", "./Images/bubblegum.jpg");
let bag = new Product("Bag", "./Images/bag.jpg");
let chair = new Product("Chair", "./Images/chair.jpg");
let banana = new Product("Banana", "./Images/banana.jpg");
let bathroom = new Product("Bathroom", "./Images/bathroom.jpg");
let wineGlass = new Product("Wine Glass", "./Images/wine-glass.jpg");
let waterCan = new Product("Water Can", "./Images/water-can.jpg");
let unicorn = new Product("Unicorn", "./Images/unicorn.jpg");
let tauntaun = new Product("Tauntaun", "./Images/tauntaun.jpg");
let sweep = new Product("Sweep", "./Images/sweep.png");
let shark = new Product("Shark", "./Images/shark.jpg");
let scissors = new Product("Scissors", "./Images/scissors.jpg");
let petSweep = new Product("Pet Sweep", "./Images/pet-sweep.jpg");
let pen = new Product("Pen", "./Images/pen.jpg");
let dragon = new Product("Dragon", "./Images/dragon.jpg");
let cthulhu = new Product("Cthulhu", "./Images/cthulhu.jpg");
let dogDuck = new Product("Dog Duck", "./Images/dog-duck.jpg");
let breakfast = new Product("breakfast", "./Images/breakfast.jpg");
let boots = new Product("Boots", "./Images/boots.jpg");

let products = [bubbleGum, bag, chair, banana, bathroom, wineGlass, waterCan, unicorn, tauntaun, sweep, shark, scissors, petSweep, pen, dragon, cthulhu, dogDuck, breakfast, boots]
//our function takes an array of products as input console.log(products[0].productName);
console.log(products);

function getRandomProducts(arrayOfProducts) {
    let randomProducts = [];
    let randomIndex1 = Math.floor(Math.random() * arrayOfProducts.length)
    let randomIndex2 = Math.floor(Math.random() * arrayOfProducts.length)
    let randomIndex3 = Math.floor(Math.random() * arrayOfProducts.length)

    console.log(randomIndex1);
    console.log(randomIndex2);
    console.log(randomIndex3);

    if (randomIndex1 === randomIndex2 || randomIndex2 === randomIndex3) {
        randomIndex1 = Math.floor(Math.random() * arrayOfProducts.length);
        randomIndex1 = Math.floor(randomIndex2);
        randomIndex2 = Math.floor(Math.random() * arrayOfProducts.length);
        randomIndex2 = Math.floor(randomIndex3);
    }


    let randomProduct1 = arrayOfProducts[randomIndex1]
    let randomProduct2 = arrayOfProducts[randomIndex2]
    let randomProduct3 = arrayOfProducts[randomIndex3]

    randomProducts.push(randomProduct1)
    randomProducts.push(randomProduct2)
    randomProducts.push(randomProduct3)

    return randomProducts
}
console.log(getRandomProducts(products)[0])
console.log(getRandomProducts(products)[0].productName)

let randomProducts = getRandomProducts(products)
console.log(randomProducts);
let firstRandomProduct = randomProducts[0]
let firstRandomProductFilePath = firstRandomProduct.imageFilePath
console.log(firstRandomProductFilePath)
let secondRandomProduct = randomProducts[1]
let secondRandomProductFilePath = secondRandomProduct.imageFilePath; console.log(secondRandomProductFilePath)
let thirdRandomProduct = randomProducts[2]
let thirdRandomProductFilePath = thirdRandomProduct.imageFilePath; console.log(thirdRandomProductFilePath)
console.log("firstRandomProduct", firstRandomProduct);
console.log("secondRandomProduct", secondRandomProduct);
console.log("thirdRandomProduct", thirdRandomProduct);

function displayProduct(product, imageTagId) {
    let productImageFilePath = product.imageFilePath
    let image = document.getElementById(imageTagId)
    image.src = productImageFilePath
    product.timesShown++;
}

displayProduct(randomProducts[0], "image1")
displayProduct(randomProducts[1], "image2")
displayProduct(randomProducts[2], "image3")

let image1HTMLtag = document.getElementById("image1")

image1HTMLtag.addEventListener("click", function amountClicked() {
    console.log("You clicked image1")
    //change image1
    randomProducts = getRandomProducts(products)
    displayProduct(randomProducts[0], "image1")
    displayProduct(randomProducts[1], "image2")
    displayProduct(randomProducts[2], "image3")
    randomProducts[0].clicks++
    console.log(randomProducts[0]);
    numberOfVotes = numberOfVotes + 1;
    if (numberOfVotes >= 25) {
        alert("NO MORE VOTES");
        image1HTMLtag.removeEventListener("click", amountClicked);
        button.addEventListener('click', endResults);
    }
})

let image2HTMLtag = document.getElementById("image2")
image2HTMLtag.addEventListener("click", function amountClicked() {
    console.log("You clicked image2")
    //change image2
    randomProducts = getRandomProducts(products)
    displayProduct(randomProducts[0], "image1")
    displayProduct(randomProducts[1], "image2")
    displayProduct(randomProducts[2], "image3")
    randomProducts[1].clicks = randomProducts[1].clicks + 1;
    console.log(randomProducts[1]);
    numberOfVotes = numberOfVotes + 1;
    if (numberOfVotes >= 25) {
        alert("NO MORE VOTES");
        image2HTMLtag.removeEventListener("click", amountClicked);
        button.addEventListener('click', endResults);
    }
})


let image3HTMLtag = document.getElementById("image3")
image3HTMLtag.addEventListener("click", function amountClicked() {
    console.log("You clicked image3")
    //change image3
    randomProducts = getRandomProducts(products)
    displayProduct(randomProducts[0], "image1")
    displayProduct(randomProducts[1], "image2")
    displayProduct(randomProducts[2], "image3")
    randomProducts[2].clicks = randomProducts[2].clicks + 1;
    numberOfVotes = numberOfVotes + 1;
    console.log(randomProducts[2]);
    if (numberOfVotes >= 25) {
        alert("NO MORE VOTES");
        image3HTMLtag.removeEventListener("click", amountClicked);
        button.addEventListener('click', endResults);
    }
})

let button = document.getElementById("results");
let ul = document.createElement('ul');
ul.innerHTML = "";
function endResults() {
    for (let i = 0; i < products.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = products[i].productName + " had " + products[i].clicks + " votes " + " ,and was seen " + products[i].timesShown + " times. ";
        ul.append(li);
        document.body.append(ul)
    }
    if (numberOfVotes >= 25){
        button.remove(); 
    }
}