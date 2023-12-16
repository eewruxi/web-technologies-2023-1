function spinWords(str){
    let result = '';
    const words = str.split(' ');
    for(let i = 0; i < words.length; i++){
        const letters = words[i];
        //если длина слова больше или равно 5 символов, то вызывает функцию reverse для переворачивания слова
        if(letters.length >= 5)
            result+= reverse(letters);
        else
            result+= letters;
        result+=" "
    }
    console.log(result);
}
function reverse(text){
    let result = '';
    for(let i = text.length-1; i > -1; i--){
        result+=text[i];
    }
    return result;
}

const result1 = spinWords( "Привет от Legacy" )
console.log(result1) // тевирП от ycageL

const result2 = spinWords( "This is a test" )
console.log(result2) // This is a test