import myImage from './assets/img.jpeg';
import "./style/style.css";
import "./style/style.scss"
import './fonts/DancingScript-VariableFont_wght.ttf'
document.getElementById('toast').style.visibility = "hidden";
document.getElementById('img').src = myImage;
document.getElementById('title').addEventListener("click", () => {
    document.getElementById('toast').style.visibility = "visible";
});
