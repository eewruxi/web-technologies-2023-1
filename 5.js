function GetMinWord(array){

    const patternWord = /[А-яA-Za-z]{2,}/g; //регулярное выражение ищет слова из двух и более букв

    //не является ли массив пустым, если пуст, возвращается пустая строка
    if(array.length === 0)
        return "";

    //если в массиве всего одно слово,то оно и возвращается
    if(array.length === 1)
        return array[0];

    //если в массиве более одного слова, все слова объединяются в одну строку через пробел
    let arr = array.join(" ");
    let minElement = arr.match(patternWord); //поиск совпадение с регуляркой

    if(minElement == null)
        return null;
    //если найдено более одного слова, они сортируются по алфавиту и возвращается минимальное слово
    if(minElement.length >= 2)
        minElement.sort();
    return minElement[0];
}

function GetPrefix(array){
    if(array.length === 0){
        return "";
    }

    const minWord = GetMinWord(array);
    if(minWord == null){
        return "";
    }
    const result = [];
    //проверка префиксов по букве, начиная с самого короткого
    for (let i = 0; i < minWord.length-1; i++) {
        const pattern = minWord.substring(i, minWord.length);

        let flag = true;
        //проверка, есть ли такой префикс в каждом слове массива
        for (let j = 0; j < array.length; j++) {
            const element = array[j];
            if(element.includes(pattern) === false){
                flag = false;
                break;
            }
        }
        //если префикс общий для всех слов, добавляем его в результат и завершаем цикл
        if(flag){
            result.push(pattern);
            break;
        }
    }

    //проверка префиксов, начиная с самого длинного
    for (let i = minWord.length; i > 1; i--) {
        const pattern = minWord.substring(0, i);

        let flag = true;
        //проверка, есть ли такой префикс в каждом слове массива
        for (let j = 0; j < array.length; j++) {
            const element = array[j];
            if(element.includes(pattern) === false){
                flag = false;
                break;
            }
        }
        if(flag){
            result.push(pattern);
            break;
        }
    }
    //если в результате есть два префикса, возвращаем более длинный из них
    if(result.length === 2){
        if(result[0].length >= result[1].length){
            return result[0];
        }
        return result[1];

    }
    //если в результате есть только один префикс, возвращаем его, иначе возвращаем пустую строку
    if(result.length === 1)
        return result[0];
    else return "";
}

console.log(GetPrefix(["пугачева","пугать","пуговица"]));
console.log(GetPrefix(["собака","гоночная машина","машина"]));
console.log(GetPrefix(["цветок","поток","хлопок"]));

