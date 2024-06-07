function setToppingListeners() { //функция для обработки событий при выборе добавок

    const toppingSelector = '.pizza_order_topping'; //все добавки
    const orderTopping = 'pizza_order_topping_active'; //выбранная добавка

    const toppings = document.querySelectorAll(toppingSelector); //получаем все добавки

    toppings.forEach(topping => topping.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle(orderTopping); //по клику для каждой добавки делаем ее выбранной

        const selectedToppingActive = e.currentTarget.classList.contains(orderTopping); //проверка выбранной добавки

        if (selectedToppingActive)
            pizza.addTopping(PizzaTopping[e.currentTarget.dataset.topping]);
        else
            pizza.removeTopping(PizzaTopping[e.currentTarget.dataset.topping]);

        updateButton() //обновляем кнопку
    }));
}

function setSizeListeners() { //функция для обработки событий при выборе размера

    const sizeSelector = '.pizza_order_size';

    const size = [ ...document.querySelectorAll(sizeSelector) ][0].dataset.size;
    pizza.setSize(PizzaSize[size]);

    document.querySelectorAll(sizeSelector).forEach(size => {
        size.addEventListener('click', (e) => {

            const sliderSize = document.querySelector('.slider_size');
            const sizes = [...document.querySelectorAll('.pizza_order_size')]; //все размеры

            pizza.setSize(PizzaSize[e.currentTarget.dataset.size]); //устанавливаем выбранный


            let left = sizes.slice(0, sizes.indexOf(e.target)).reduce((acc, sizeItem) => {
                return acc + sizeItem.offsetWidth
            }, 4); //позиция слайдера

            sliderSize.setAttribute('style', 'left: ' + left + 'px; width: ' + e.target.offsetWidth + 'px');
            updateButton();
            updateToppingsPrice();
        })
    })

}

function setTypeListeners() {
    const typeSelector = '.pizza_order_type';
    const activeType = 'pizza_order_type_active'
    const types = document.querySelectorAll(typeSelector);
    let selectedTypeActive = false;

    types.forEach(type =>
        type.addEventListener('click', (e) => {

            types.forEach(el => el !== e.currentTarget && el.classList.remove(activeType));//убираем другие элементы выбранные

            e.currentTarget.classList.toggle(activeType);

            selectedTypeActive = e.currentTarget.classList.contains(activeType); //проверка выбранного

            pizza.setType(PizzaTypes[e.currentTarget.dataset.type]);

            updateButton(!selectedTypeActive);
        })
    );

    setSizeListeners(selectedTypeActive);
    setToppingListeners();
}

function sliderSize() { //обновление положение слайдера
    const sizes = document.querySelectorAll('.pizza_order_size');
    const slider = document.querySelector('.slider_size');
    slider.setAttribute('style', 'left: ' + 4 + 'px; width: ' + sizes[0].offsetWidth + 'px');
}
function updateButton(isReset) { //подсчет прайса и каллорий и обновление кнопки
    if (!isReset) {
        document.querySelector('.pizza_order_price').innerHTML = pizza.calculatePrice();
        document.querySelector('.pizza_order_calories').innerHTML = pizza.calculateCalories();
    } else {
        document.querySelector('.pizza_order_price').innerHTML = '0';
        document.querySelector('.pizza_order_calories').innerHTML = '0';
    }
}

function updateToppingsPrice() { //обновление цен добавок от размера
    document.querySelectorAll('.pizza_order_topping').forEach(topping => {
        topping.querySelector('.pizza_topping_price').innerHTML = PizzaTopping[topping.dataset.topping].info[pizza.getSize().id].price;
    });
}

const pizza = new Pizza(null, null, null);

sliderSize();
setTypeListeners();