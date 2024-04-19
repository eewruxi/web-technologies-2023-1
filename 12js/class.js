class Topping{
    constructor(name, smallPrice, smallCalories, bigPrice, bigCalories){
        this.name = name; //название добавки
        this.smallPrice = smallPrice; //цена и ккалории для маленькой пиццы
        this.smallCalories = smallCalories;
        this.bigPrice = bigPrice; //цена и ккалории для большой пиццы
        this.bigCalories = bigCalories;
    }
}
class Pizza {
    constructor(size, stuffing, price, calories){
        this.size = size; //вид
        this.stuff = stuffing; //размер
        this.price = price; //цена
        this.calories = calories; //калории
        this.toppings = [] //список добавок
    }

    addTopping(topping){ //добавить добавку
        if(topping instanceof Topping){
            this.toppings.push(topping);
            return;
        }
        else { console.log("Добавки '" + topping + "' не существует") }
    }

    removeTopping(topping){ //убрать добавку
        const index = this.toppings.findIndex(i => i = topping);
        this.toppings.splice(index, 1); //удаляет один эл-т по индексу
    }

    getToppings(){ //получить список добавок
        return this.toppings.map(i => i.name);
    }

    getSize(){ //узнать вид пиццы
        return this.size;
    }

    getStuffing(){ //узнать размер пиццы
        return this.stuff;
    }

    calculatePrice(){ //узнать цену
        let cost = this.price;
        this.toppings.forEach(element =>{
            if (this.size == "Большая"){
                cost += element.bigPrice;
            }
            else{
                cost += element.smallPrice;
            }
        })
        return cost;
    }

    calculateCalories(){ //узнать калорийность
        let value = this.calories;
        this.toppings.forEach(element =>{
            if (this.size == "Большая"){
                value += element.bigCalories;
            }
            else{
                value += element.smallCalories;
            }
        })
        return value;
    }
}
class Margarita extends Pizza{
    constructor(stuffing){
        if (stuffing == "Большая"){
            super("Маргарита", stuffing, 700, 500)
        }
        else if (stuffing == "Маленькая"){
            super("Маргарита", stuffing, 600, 400)
        }
        else{
            throw new Error("Такого размера нет");
        }
    }
}

class Pepperoni extends Pizza{
    constructor(stuffing){
        if (stuffing == "Большая"){
            super("Пепперони", stuffing,1000, 600)
        }
        else if (stuffing == "Маленькая"){
            super("Пепперони",stuffing, 900, 500)
        }
        else{
            throw new Error("Такого размера нет");
        }
    }
}

class Bavarian extends Pizza{
    constructor(stuffing){
        if (stuffing == "Большая"){
            super("Баварская",stuffing, 900, 650)
        }
        else if (stuffing == "Маленькая"){
            super("Баварская",stuffing, 800, 550)
        }
        else{
            throw new Error("Такого размера нет");
        }
    }
}


let margaritaBig = new Margarita("Большая");
let margaritaSmall = new Margarita("Маленькая");

let pepperoniBig = new Pepperoni("Большая");
let pepperoniSmall = new Pepperoni("Маленькая");

let bavarianBig = new Bavarian("Большая");
let bavarianSmall = new Bavarian("Маленькая");


let array = [margaritaBig,margaritaSmall,pepperoniBig,pepperoniSmall,bavarianBig,bavarianSmall]
let toppingCheeseBoard = new Topping("Сырный борт", 150, 20, 300, 50);
let toppingMozzarella = new Topping("Сливочная моцарелла", 150, 20, 300, 50);
let toppingCheddar = new Topping("Чедер и пармезан", 150, 20, 300, 500);

margaritaBig.addTopping(toppingCheddar);
margaritaBig.addTopping(toppingMozzarella);
margaritaBig.addTopping(toppingCheeseBoard);
margaritaBig.addTopping("Морковь");
margaritaBig.removeTopping(toppingCheddar);

pepperoniSmall.addTopping(toppingMozzarella);


for (const element of array){
    console.log("Пицца: "+ element.getSize() + " Размер: " + element.getStuffing() + " Калорийность: " + element.calculateCalories()+ " Цена: " + element.calculatePrice() + " Добавки: " + element.getToppings());
    console.log("--------------------------------")
}