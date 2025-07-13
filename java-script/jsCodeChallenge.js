// Get duplicate elements in an array
const arrList = [1, 2, 3, 4, 4, 5, 6, 7, 7, 9, 10, 11, 13, 14, 14, 13];
const dupilcateArr = [];
for (i = 0; i < arrList.length; i++) {
    for (j = i + 1; j < arrList.length; j++) {
        if (arrList[i] == arrList[j]) {
            dupilcateArr.push(arrList[i]);
            break;
        }
    }
}
console.log(dupilcateArr); // Output: [4, 7, 13]

// Get duplicate elements in an array using Set
const uniqueElem = [...new Set(arrList)];
console.log("Get unique values", uniqueElem)


// get factorial of a number
function fatorial(n) {
    let rslt = 1;
    if (n < 0) return -1; // Factorial of negative number is not defined
    for (let i = 2; i <= n; i++) {
        rslt *= i;
    }
    return rslt;
}

console.log("Factorial of 5 is", fatorial(5)); // Output: 120


let empObj = [
    {
        "name": "Alice",
        "age": 25,
        "gender": "Female",
        "height_cm": 168,
        "city": "New York"
    },
    {
        "name": "Bob",
        "age": 30,
        "gender": "Male",
        "height_cm": 183,
        "city": "Los Angeles"
    },
    {
        "name": "Charlie",
        "age": 35,
        "gender": "Male",
        "height_cm": 178,
        "city": "Chicago"
    },
    {
        "name": "Diana",
        "age": 28,
        "gender": "Female",
        "height_cm": 162,
        "city": "Houston"
    },
    {
        "name": "Eva",
        "age": 22,
        "gender": "Female",
        "height_cm": 173,
        "city": "Miami"
    }
];

function getObjectByGenderType(empObj) {
    return empObj.filter(elem => elem.gender === "Male");
};
console.log("==================Get object by gender ============================");
console.log(getObjectByGenderType(empObj));

function getAllName(empObj) {
    return empObj.map(name => name.name);
}
console.log(getAllName(empObj));
let names = [];

function getAllName1(empObj) {
    empObj.forEach(element => {
        names.push(element.name);
    });
}
getAllName1(empObj);
console.log(names);

console.log("==================Get array of object woth name and height===========");
function getArrayOfObjectWithNameAndHeight(empObj) {
    return empObj.map((data) => {
        return {
            name: data.name,
            height: data.height_cm

        }
    })
}
console.log(getArrayOfObjectWithNameAndHeight(empObj));

console.log("==================Get array of object age > 30===========");

function getArrayByAgethan30(empObj) {
    return empObj.filter((data) => {
        return data.age >= 30;
    })
}

console.log(getArrayByAgethan30(empObj));

console.log("==================Get total height of person===========");

function totalHeightOfAllPerson(empObj) {
    return empObj.reduce((total, elem) => total + elem.height_cm, 0)
}
console.log(totalHeightOfAllPerson(empObj));

console.log("==================Get total number  of char===========");

function totalNumberNameChar(arr) {
    return arr.reduce((total, elem) => {
        return total + elem.name.length;
    }, 0);
}
console.log(totalNumberNameChar(empObj));


console.log("==================Check all perosn has age > 30===========");

function checkAllAgeAbove30(empObj) {
    return empObj.every(elem => elem.age > 20);
}

console.log(checkAllAgeAbove30(empObj));