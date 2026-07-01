import myImage from './assets/img.jpeg';
import "./style/style.css";
import "./style/style.scss"
import './fonts/DancingScript-VariableFont_wght.ttf';
// import _ from 'lodash';
import dayjs from 'dayjs';
const element = document.getElementById('toast');
element.style.visibility = "hidden";
document.getElementById('img').src = myImage;
document.getElementById('title').addEventListener("click", () => {
    // dynamic import
    import("lodash").then(({ default: _ }) => {
        element.innerHTML = `Total bill is:🎉 ${_.add(200, 300)}`,
            element.style.visibility = "visible";
    });
})

document.getElementById('date').innerHTML = `Date and time is: ${dayjs().format('YYYY MM DD HH:mm A')}`;

export function unused_1() {
    console.log("unused 1");
}
export function unused_2() {
    console.log("unused 2");
}