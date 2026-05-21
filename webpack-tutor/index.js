import { sum, multi } from "./sum.js";
document.getElementById('button').addEventListener("click", () => {
    const result = sum(15, 20);
    const multiply = multi(15, 20);
    document.getElementById("result").innerHTML =
        `Sum+multi of 15,20 : ${result} - multi: ${multiply}`
});