function pickPropArray(array, prop){
    const result = []
    for(let index = 0; index < array.length; index++)
    {
        let element = array[index];
        if(element.hasOwnProperty(prop)){
            result.push(element[prop])
        }
    }
    return result;
}
const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 },
]

const result = pickPropArray(students, "name")
console.log(result)