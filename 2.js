function createCounter(){
    let counter = 0;
    return function (){
        counter++;
        console.log(counter);
    }
}

const counter1 = createCounter();
counter1();
counter1();

const counter2 = createCounter();
counter2();
counter2();
counter2();