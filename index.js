function Product(productName, imageFilePath) {
    this.productName = productName;
    this.imageFilePath = imageFilePath;
    this.timesShown = 0;
}
let meatballGum = new Product("Meatball Gum", ".Images/bubblegum.jpg");
let bag = new Product("Bag", "./Image/bag.jpg");
let chair = new Product("Chair", "./Images/chair.jpg");
let bananaCutter = new Product("Banana Cutter", "./Images/banana.jpg");
let bathroomStand = new Product("Bathroom Stand", "./Images/bathroom.jpg");
let wineGlass = new Product("Wine Glass", "./Images/wine-glass.jpg");
let waterCan = new Product("Water Can", "./Images/water-can.jpg");
let unicornMeat = new Product("Unicorn Meat", "./Images/chair.jpg");
let tauntaun = new Product("Tauntaun", "./Images/tauntaun.jpg");
let babySweep = new Product("Baby Sweep", "./Images/sweep.jpg");
let sharkSleeper = new Product("Shark Sleeper", "./Images/shark.jpg");
let pizzaScissors = new Product("Pizza Scissors", "./Images/scissors.jpg");
let petSweep = new Product("Pet Sweep", "./Images/pet-sweep.jpg");
let penSilverware = new Product("Pen Silverware", "./Images/pen.jpg");
let dragonMeat = new Product("Dragon Meat", "./Images/dragon.jpg");
let cthuluToy = new Product("Cthulu Toy", "./Images/cthulu.jpg");
let dogDuck = new Product("Dog Duck", "./Images/dog-duck.jpg");
let breakfast = new Product("breakfast", "./Images/breakfast.jpg");
let boots = new Product("Boots", "./Images/boots.jpg");

let products = [meatballGum, bag, chair, bananaCutter, bathroomStand, wineGlass, waterCan, unicornMeat, tauntaun, babySweep, sharkSleeper, pizzaScissors, petSweep, penSilverware, dragonMeat, cthuluToy, dogDuck, breakfast, boots]
//our function takes an array of products as input

function getRandomProducts(arrayOfProducts) {
    let randomProducts = [];
    let randomIndex1 = Math.floor(Math.random() * arrayOfProducts.length)
    let randomIndex2 = Math.floor(Math.random() * arrayOfProducts.length)
    let randomIndex3 = Math.floor(Math.random() * arrayOfProducts.length)

    let randomProduct1 = arrayOfProducts[randomIndex1]
    let randomProduct2 = arrayOfProducts[randomIndex2]
    let randomProduct3 = arrayOfProducts[randomIndex3]

    randomProducts.push(randomProduct1)
    randomProducts.push(randomProduct2)
    randomProducts.push(randomProduct3)

    return randomProducts
}


let randomProducts = getRandomProducts(products)
console.log(randomProducts);
let firstRandomProduct = randomProducts[0]
let firstRandomProductFilePath = firstRandomProduct.imageFilePath;
console.log(firstRandomProductFilePath)
let secondRandomProduct = randomProducts[1]
let secondRandomProductFilePath = secondRandomProduct.imageFilePath;
let thirdRandomProduct = randomProducts[2]
let thirdRandomProductFilePath = thirdRandomProduct.imageFilePath;

console.log("firstRandomProduct", firstRandomProduct);