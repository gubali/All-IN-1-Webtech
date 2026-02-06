

const flatArr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// approach 1
const flatArr1 = flatArr.flat(Infinity);
// console.log(flatArr1);

// approach 2
function flattenArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flattenArray(arr[i]));

        }
        else {
            result.push(arr[i]);
        }
    }
    return result
}
const newArr = flattenArray(flatArr);
console.log("Flat Array", newArr);

// deep clone
let Loc = [];
let a = [
    {
        name: "adam",
        age: 21,
        add: [
            { add1: 'Blr' },
            { add2: 'Delhi' }
        ]

    }
];
let copyObj = JSON.parse(JSON.stringify(a));
// console.log("Copied Object", JSON.stringify(copyObj, 0, 2));
console.log("Copied Object", JSON.stringify(copyObj, null, 2));
// approach 1
let addresses = a.flatMap(item => item.add.map(obj => Object.values(obj)[0])); // ['Blr', 'Delhi']

// approach 2
let listOfCities = [];
console.log(addresses);

console.log('*********************Below example of deep and shallow***************************');
/***
 * Below deep and shallow copy
 * 
 */

let obj = { name: "Haniya", details: { age: 2 } };
let c_obj1 = obj;
c_obj1.name = "Haniya asif";

// shallow copy: copy actual copy of object, but if we change the value of object it will reflect in original object

// solution 1
let s_obj = Object.assign({}, obj);
s_obj.details.age = 30;
// solition 2 [...obj]
let s_obj2 = { ...obj };
s_obj2.name = "Haniya Asif Khan";
// solution 3 JSON.parse(JSON.stringify(obj))
let s_obj3 = JSON.parse(JSON.stringify(obj));
s_obj3.name = "Haniya Nisha";
// solution 4 Object.create(obj)
let s_obj4 = Object.create(obj);
s_obj4.name = "Haniya Asif Khan 12334";
console.log("Original Obj", obj);
console.log("Shalloe Solutions 1 Object.assign- ", s_obj);
console.log("ShallowSolutions 2 [...obj]- ", s_obj2);
console.log("ShallowSolutions 3 JSON.parse(JSON.stringify(obj))", s_obj3);
console.log("ShallowSolutions 4 Object.create(obj)", s_obj4);

// deep copy: copy actual copy of object, but if we change the value of object it will not reflect in original object

console.log("*********************Deep copy***************************");
let employe = {
    name: 'asif',
    address: {
        city: "Banaglore",
        state: "Karnataka"
    }
}
let emp_copy = { ...employe };
// console.log("Original Emp", employe);
// console.log("Deep Copy", emp_copy.address.city = "Lucknow");
// console.log("Original Emp after change", employe);

// deep copy example 2
let emp_copy2 = JSON.parse(JSON.stringify(employe));
emp_copy2.address.city = "Lucknow";
console.log("Before change", employe);
console.log("Deep Copy", emp_copy2);


console.log("*********************Get only non repeated character***************************");

let myStr = "hellRNNo";

function nonRepeatedChar(str) {
    let char = [];
    for (let i = 0; i < myStr.length; i++) {
        if (str[i] !== str[i - 1] && str[i] !== str[i + 1]) {
            char.push(str[i]);

        }
    }
    return char;
}
console.log(nonRepeatedChar(myStr));

console.log("*********************below synchronous call***************************");
console.log("1");
console.log("2");
console.log("3");

console.log("*********************below asynchronous call***************************");
// method 1 Callback -> Which old approach
console.log("Start");
setTimeout(() => {
    console.log("Callback");
}, 2000);
console.log("End");

// method 2 Promise -> Which is new approach
console.log("promise start");
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Inside promise');
    }, 3000)
});
promise.then((res) => {
    console.log(res);
})
console.log("promise end");

// method 3 async/await -> Which is new approach
console.log("async/await start");
async function fetchUserData() {
    try {
        console.log("Start fetching data");
        let response = await fetch("https://jsonplaceholder.typicode.com/users/");
        console.log("Data fetched", await response.json());
    }
    catch (error) {
        console.log("Error fetcing data", error);
    }
}
fetchUserData();
console.log("async/await end");

// promise chaining
console.log("====================Promise Chaining================");
function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let a = 20;
            let b = 30;
            if (b > a) {
                resolve("Task 1 is completed");
            }
            reject("Task 1 is not completed");
        }, 1000)
    })
}
function task2(prevTask) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let str = "khan";
            if (str.length >= 4) {
                resolve( prevTask + "Promise chaining - Task 2 is completed");
            }
            reject("Task 2 is not completed");
        }, 2000)
    })
}
// task1().then(res => console.log("Success", res))
//     .catch(err => console.log("Errror", err));

task1().then(task2).then(console.log)
    .catch(console.error);

//example dummy
async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (5 > 9) {
                resolve("Dome!")
            }
            else {
                reject("Error")
            }
        }, 2000);
    });
    try {

        let result = await promise;
        alert(result);
    }
    catch (error) {
        alert(error);
    }
}
f();

console.log("*********************Promise method with example***************************");
// promse.all with example
function fetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users/");
                const userData = await response.json();
                resolve(userData);
            } catch (error) {
                reject(error);
            }
        }, 2000);
    });
}
function fetchPost() {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
                const postData = await response.json();
                resolve(postData);
            } catch (error) {
                reject(error);
            }
        }, 1000);
    });
}
function fetchComment() {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/comments/");
                const commentData = await response.json();
                resolve(commentData);
            } catch (error) {
                reject(error);
            }
        }, 4000);
    });
}
// Using Promise.all
Promise.all([fetchUser(), fetchPost(), fetchComment()])
    .then(([user, post, comment]) => {
        console.log("User 1", user);
        console.log("Post 1", post);
        console.log("Comment 1", comment);
    })
    .catch((err) => {
        alert('Error: ' + err);
    });


// promsie.race => it will return first promise which is resolved
const swiggy = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Swiggy is ready to deliver");
    }, 3000)
})
const zomoto = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("zomoto is ready to deliver");
    }, 2000)
})
const foodPanda = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Foodpanda is ready to deliver");
    }, 1000)
})

Promise.race([swiggy, zomoto, foodPanda]).then((winner) => {
    console.log("First promise which is resolved", winner);
}).catch((err) => {
    console.log("Error", err);
})
// Promise.reject 
function fetchUserById(userId) {
    if (typeof userId !== 'number') {
        return Promise.reject("Invalid user Id");

    }
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res) => {
            if (!res.ok) {
                return Promise.reject("API return an error", res.status)
            }
            return res.json();
        })
}
fetchUserById(10).then((res) => {
    console.log("User Data by Id", res);
}).catch((error) => {
    console.error("Error", error);
})

// Promise.resolve example => Like readymade chips 
function foodeOrder(isBurgeReady) {
    if (isBurgeReady) {
        return Promise.resolve("Burge is ready to deliver");
    }
    else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Fresh burger is ready!");
            }, 2000)
        })
    }

}
foodeOrder(true).then((res) => {
    console.log("Success response:: ", res);
}).catch((err) => {
    console.error("Error", err);
});

// event loop with example
console.log("Event loop start");
setTimeout(() => {
    console.log("Event loop setTimeout 1");
}, 0);
Promise.resolve().then(() => {
    console.log("PEvent loop Promise 1");
})
console.log("Event loop end");

// prgram