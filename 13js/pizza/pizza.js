class PizzaTypes {
    static Pepperoni = {
        id: 'Pepperoni',
        name: 'Пепперони',
        price: 800,
        calories: 400
    };
    static Margarita = {
        id: 'Margarita',
        name: 'Маргарита',
        price: 500,
        calories: 300
    };
    static Bavarskaya = {
        id: 'Bavarskaya',
        name: 'Баварская',
        price: 700,
        calories: 450
    };
}

class PizzaSize {
    static Big = {
        id: 'big',
        name: 'Большая',
        price: 200,
        calories: 200
    };
    static Small = {
        id: 'small',
        name: 'Маленькая',
        price: 100,
        calories: 100
    };
}

class PizzaTopping {
    static CreamCheese =  {
        id: 'CreamCheese',
        name: 'Сливочная Моцарелла',
        info: {
            big: {
                price: 100,
                calories: 0
            },
            small: {
                price: 50,
                calories: 0
            }
        }
    };
    static Border =  {
        id: 'Border',
        name: 'Сырный борт',
        info: {
            big: {
                price: 300,
                calories: 50
            },
            small: {
                price: 150,
                calories: 50
            }
        }
    };
    static CheddarAndParmesan =  {
        id: 'CheddarAndParmesan',
        name: 'Чеддер и Пармeзан',
        info: {
            big: {
                price: 300,
                calories: 50
            },
            small: {
                price: 150,
                calories: 50
            }
        }
    };
}

class Pizza {

    constructor(type, size, toppings) {
        this.type = type;
        this.size = size;
        this.toppings = toppings ? toppings.map(topping => this.convertTopping(topping)) : [];
    }

    convertTopping(topping) {
        return {
            id: topping.id,
            name: topping.name,
            price: topping.info[this.size.id].price,
            calories: topping.info[this.size.id].calories,
        };
    }

    addTopping(topping) {
        if (!this.toppings.map(t => t.name).includes(topping.name)) {
            this.toppings.push(this.convertTopping(topping));
        }
        return this;
    }

    removeTopping(topping) {
        const index = this.toppings.findIndex(i => i = topping);
        this.toppings.splice(index, 1);
        return this;
    }

    setType(pizzaType) {
        this.type = pizzaType;
    }

    setSize(pizzaSize) {
        this.size = pizzaSize;
    }

    getSize() {
        return this.size;
    }

    calculatePrice() {
        let totalPrice = this.size.price + this.type.price; // Начальная цена с учетом размера и типа пиццы
        totalPrice += this.toppings.reduce((acc, topping) => acc + topping.price, 0); // Добавляем цену всех добавок
        return totalPrice;
    }

    calculateCalories() {
        let totalCalories = this.size.calories + this.type.calories; // Начальное количество калорий с учетом размера и типа пиццы
        totalCalories += this.toppings.reduce((acc, topping) => acc + topping.calories, 0); // Добавляем калории всех добавок
        return totalCalories;
    }
}
