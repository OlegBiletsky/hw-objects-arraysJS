//1. Створити обєкт який описує тварину (назву, вагу, вік, середню швидкість), і наступні функції для роботи з ним:
/*
Функція яка виведе всю інформацію про тварину. 
Функція яка виведе за скільки тварина зможе подолати 1000 км. (врахуйте що тварина може рухатись не більше 12 годин у день). 
Функція яка зможе змінити назву тварини на більш детальну. 
*/
/*
const MARAFON_WAY = 1000;
const DAY_LIMIT = 12;

let animal = {
    animalName : "dog",
    animalWeight : 30,
    animalAge : 10,
    animalSpeed : 20,
    aboutMe : function () {
        console.log(this.animalName, "name"); //чому це виводить не так як інші проперті?????
        console.log(this.animalWeight, "weight");
        console.log(this.animalAge, "age");
        console.log(this.animalSpeed, "speed");
    },
    marafon1000 : function () {
        let time = MARAFON_WAY / this.animalSpeed;
        let resultTime = time / DAY_LIMIT;
        console.log( ` ${MARAFON_WAY} км. за ${time} год. ` );
        console.log( ` ${MARAFON_WAY} км. за ${Math.ceil(resultTime)} дн. ` );
        
    },
    improveMyName : function () {
        newName = prompt('Write new name:');
        console.log(newName);
        this.animalName = newName;
        console.log(` My new name: ${this.animalName} `);
    },
    
}


animal.aboutMe();
animal.marafon1000();
animal.improveMyName();
animal.aboutMe();














//2. Створіть обєкт який має у собі 2 довжини сторін фігури. Додайте методи які будуть робити наступне - рахувати площу фігури, периметр фігури, зроблять фігуру 3-д, зададуть назву фігури, переведуть значення з сантиметрів у метри.
let koef = 0.01; 
let figure = {
    figureLength : 65,
    figureWidth : 40,
    figureSquare : function () {
        let area = this.figureLength * this.figureWidth;
        console.log(area);
    },
    figurePerimeter : function () {
        let perimeter = (this.figureLength + this.figureWidth) * 2;
        console.log(perimeter);
    },
    updateTo3D : function () {
        this.figureHeight = 30;
    },
    figureName : function () {
        this.figureName = 'rectangle';
    },
    conversion : function () {
        for (let key in this) {
            // console.log(key);
            // console.log(typeof key);
            // console.log(figure[key]);
            // console.log(typeof figure[key]);

            // console.log('');
            // console.log('');
            // console.log('');

            if ( typeof this[key] === "number" ) {
                console.log(this[key]);
                this[key] = this[key] * koef;
                console.log(this[key]);
                console.log('');
                
            }
        }
    }
}

console.log(figure);
figure.figureSquare();
figure.figurePerimeter();
figure.updateTo3D();
console.log(figure);
figure.figureName();
figure.conversion();

console.log(figure);














*/
//3. Створимо аналог списка покупок (мінімум 5 покупок з всіма заданими пропертями. )
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
// addToCart(inputNewItem());//це КОЛЛ-БЕК??






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



