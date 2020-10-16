//1. Створити обєкт який описує тварину (назву, вагу, вік, середню швидкість), і наступні функції для роботи з ним:
/*
Функція яка виведе всю інформацію про тварину. 
Функція яка виведе за скільки тварина зможе подолати 1000 км. (врахуйте що тварина може рухатись не більше 12 годин у день). 
Функція яка зможе змінити назву тварини на більш детальну. 
*/
console.log('***task 1***');

const MARAFON_WAY = 1000;
const DAY_LIMIT = 12;

let animal = {
    animalName : "dog",
    animalWeight : 30,
    animalAge : 10,
    animalSpeed : 20,
    aboutMe : function () {
        console.log(this.animalName, "name"); //чому "name" виводить без лапок?????
        console.log(this.animalWeight, "weight");
        console.log(this.animalAge, "age");
        console.log(this.animalSpeed, "speed");
    },
    marafon1000 : function () {
        let time = MARAFON_WAY / this.animalSpeed;
        let resultTime = time / DAY_LIMIT;
        console.log( ` ${MARAFON_WAY} км. за ${time} год. ` );
        console.log('або');
        console.log( ` ${MARAFON_WAY} км. за ${Math.ceil(resultTime)} дн. ` );
    },
    improveMyName : function () {
        newName = prompt('Write new name for animal:');
        this.animalName = newName;
        console.log(` My new name: ${this.animalName} `);
    },//жовта підсвітка означає що метод змінює сам обєкт
}


animal.aboutMe();
animal.marafon1000();
animal.improveMyName();












/*2. Створіть обєкт який має у собі 2 довжини сторін фігури. 
Додайте методи які будуть робити наступне:
рахувати площу фігури, 
периметр фігури, 
зроблять фігуру 3-д, 
зададуть назву фігури, 
переведуть значення з сантиметрів у метри.
*/
console.log('***task 2***');

let koef = 0.01;
let figure = {
    figureLength : 65,
    figureWidth : 40,
    figureSquare : function () {
        let area = this.figureLength * this.figureWidth;
        console.log(area, "square");
    },
    figurePerimeter : function () {
        let perimeter = (this.figureLength + this.figureWidth) * 2;
        console.log(perimeter, "perimeter");
    },
    updateTo3D : function () {
        let newValue = +prompt("Input 3 value:", 30);
        this.figureHeight = newValue;
    },
    figureName : function () {
        let figure_name = prompt("Write name for figure:", "rectangle");
        this.figureName = figure_name;
    },
    conversion : function () {
        for (let key in this) {

            if ( typeof this[key] === "number" ) {
                console.log(this[key], 'cм');
                this[key] = this[key] * koef;
                console.log(this[key], 'м');

            }
        }
    }
}

console.log(figure);
figure.figureSquare();
figure.figurePerimeter();
figure.updateTo3D();
figure.figureName();
figure.conversion();
console.log(figure);













//3. Створимо аналог списка покупок (мінімум 5 покупок з всіма заданими пропертями.)
/*
let products = {
                tomato: {
                    count: 5,
                    price: 50,
                    buy: false,
                    inStore: true
                },
  ...
}
*/
/*
Виводимо список покупок - спочатку ті, які є в магазині, потім яких нема.
Виводимо список покупок, які ми купили.
Додаємо функцію, яка дозволить купити продукт.
Додаємо функцію, яка просумує всі зроблені покупки і виведе результат (не забуваємо, що є значення кількості та ціни за одиницю товару).
Додаємо можливість збільшувати кількість товару.
Додаємо можливість зменшувати кількість товару(менше 0 бути не може).
*/

let products = {

    tomato: {
        count: 3,
        price: 18,
        buy: false,
        inStore: true,
    },
    cucumber : {
        count: 5,
        price: 20,
        buy: false,
        inStore: true,
    },
    onion : {
        count: 3,
        price: 18,
        buy: true,
        inStore: false,
    },
    bread : {
        count: 1,
        price: 12,
        buy: true,
        inStore: true,
    },
    butter: {
        count: 5,
        price: 50,
        buy: false,
        inStore: true,
    },
    milk : {
        count: 1,
        price: 50,
        buy: true,
        inStore: true,
    },


}

/*
//Виводимо список покупок - спочатку ті, які є в магазині, потім яких нема.
let inStoreConfirmArr = [];//це створювати тут чи в тілі функції??
let notInStoreConfirmArr = [];//це створювати тут чи в тілі функції??
function inStoreConfirm () {
    for (let key in products) {
        if ( products[key].inStore === true ) {
            inStoreConfirmArr.push(key);
        } else {
            notInStoreConfirmArr.push(key);
        }
    }
    console.log(inStoreConfirmArr, "in store");
    console.log(notInStoreConfirmArr, "not in store");
}
inStoreConfirm();






//Виводимо список покупок, які ми купили.
let weBuyArr = [];
function weBuy () {
    for (let key in products) {
        if ( products[key].buy === true && products[key].inStore === true) {
            weBuyArr.push(key);
        }
    }
    console.log(weBuyArr);
}
weBuy();



*/


//Додаємо функцію, яка дозволить купити продукт.
function addToCart (inputWord) {
    for (let key in products) {
        if (key === inputWord && products[key].buy === false && products[key].inStore === true) {
            products[key].buy = true;
        }
    }
}
function inputNewItem () {
    return prompt('What do you want to add in your cart');
}
addToCart(inputNewItem());//це КОЛЛ-БЕК??

console.log(products);


/*


//Додаємо функцію, яка просумує всі зроблені покупки і виведе результат (не забуваємо, що є значення кількості та ціни за одиницю товару).
let result = 0;
function Result () {
    for (let key in products) {
        if ( products[key].inStore === true && products[key].buy === true) {
            let cost = products[key].count * products[key].price;
            console.log(cost)
            result += cost;
        }
    }
    return result;
}
console.log(Result());







//Додаємо можливість збільшувати кількість товару.
function addCount (prodItem, newCount) {
    for (let key in products) {
        if (key === prodItem) {
            console.log(products[key].count);
            products[key].count = newCount;
            console.log(products[key].count);
        }
    }
}
addCount('tomato', 80);






//Додаємо можливість зменшувати кількість товару(менше 0 бути не може).
function subtract (prodItem, newCount) {
   
    console.log('');
    
    for (let key in products) {
        if (key === prodItem) {
            console.log(products[key].count);
            products[key].count = newCount;
            console.log(products[key].count);
        }
    }
}
subtract('tomato', 9);










//4. Задана колекція [{name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin"}, {}, {},{}]. Вивести всіх адмінів. Вивести середній вік усіх працівників. Вивести тільки унікальні хоббі працівників.

/*
let users = [
    {name: "Yura", age: 55, hobby: ["films", "books", "mountains"], type: "Guest"},
    {name: "Petro", age: 30, hobby: ["WordPress", "books", "mountains"], type: "Admin"},
    {name: "Oleg", age: 26, hobby: ["programming", "books", "mountains"], type: "Admin"},
    {name: "Stepan", age: 23, hobby: ["films", "games", "hiking"], type: "User"},
    {name: "Oksana", age: 40, hobby: ["films", "games", "hiking"], type: "User"},
    {name: "Anna", age: 28, hobby: ["films", "voleyball", "hiking"], type: "User"},
]
//Вивести всіх адмінів.
adminArr = [];
function Role () {
    console.log('');
    for (let i=0; i<users.length-1; i++) {
        if (users[i].type === "Admin") {
            adminArr.push(users[i].name);
        }
    }
    console.log(adminArr);
}
Role();

//Вивести середній вік усіх працівників. 
let agggge = 0;
function usersAge () {
    for (let i=0; i<users.length-1; i++) {
         agggge += users[i].age;
    }
    console.log(agggge / users.length);
    
}
usersAge();






//Вивести тільки унікальні хоббі працівників.
















*/