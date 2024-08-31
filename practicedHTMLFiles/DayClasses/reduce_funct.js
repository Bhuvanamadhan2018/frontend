// Array.prototype.reduce

const arr = [1,2,3,4,5]


const initialvalue = 0;
const result = arr.reduce(add,initialvalue);

const add = function (accumulator,currentValue){
    return accumulator + currentValue;
}

//object.keys

const person = {
    firstname : "bhuva",
    secondname : "eshwari",
    occupation : "self-employee",

}


